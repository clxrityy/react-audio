/**
 * Deletes empty files in the repository while respecting .gitignore (and other git excludes).
 *
 * Strategy:
 * - Use `git ls-files --cached --others --exclude-standard` to list all tracked and untracked files
 *   that are NOT ignored by .gitignore. This naturally excludes node_modules and any ignored paths.
 * - For each candidate, delete it if it's a regular file with size === 0.
 *
 * Usage:
 *   node scripts/delete-empty-files.js           # delete empty files
 *   node scripts/delete-empty-files.js --dry-run # list what would be deleted
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const args = new Set(process.argv.slice(2));
const DRY_RUN = args.has("--dry-run");

function listGitManagedUnignoredFiles() {
  try {
    // Null-separated output to safely handle filenames with spaces/newlines
    const buf = execSync(
      "git ls-files -z --cached --others --exclude-standard",
      { stdio: ["ignore", "pipe", "pipe"] }
    );
    const out = buf.toString("utf8");
    return out.split("\u0000").filter(Boolean);
  } catch (err) {
    console.warn(
      "Warning: git command failed; falling back to a basic filesystem scan (node_modules and common build dirs will be skipped).",
      err?.message || String(err)
    );
    return fallbackWalk(process.cwd());
  }
}

function fallbackWalk(rootDir) {
  const SKIP_DIRS = new Set([
    "node_modules",
    ".git",
    ".turbo",
    "dist",
    "build",
    ".next",
    "coverage",
  ]);
  /** @type {string[]} */
  const files = [];

  /** @param {string} dir */
  function walk(dir) {
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return; // skip unreadable directories
    }
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (SKIP_DIRS.has(entry.name)) continue;
        walk(full);
      } else if (entry.isFile()) {
        files.push(path.relative(rootDir, full));
      }
    }
  }

  walk(rootDir);
  return files;
}

function isEmptyFile(fp) {
  try {
    const st = fs.lstatSync(fp);
    return st.isFile() && st.size === 0;
  } catch {
    return false;
  }
}

function main() {
  const cwd = process.cwd();
  const candidates = listGitManagedUnignoredFiles();
  const emptyFiles = [];

  for (const rel of candidates) {
    if (!rel) continue;
    const abs = path.isAbsolute(rel) ? rel : path.join(cwd, rel);
    if (isEmptyFile(abs)) emptyFiles.push(abs);
  }

  if (emptyFiles.length === 0) {
    console.log("No empty files found.");
    return;
  }

  if (DRY_RUN) {
    console.log("[DRY RUN] The following empty files would be deleted:");
    for (const f of emptyFiles) console.log(" -", path.relative(cwd, f));
    console.log(`Total: ${emptyFiles.length} file(s)`);
    return;
  }

  let deleted = 0;
  for (const f of emptyFiles) {
    try {
      fs.unlinkSync(f);
      deleted++;
      console.log("Deleted:", path.relative(cwd, f));
    } catch (err) {
      console.warn(
        "Failed to delete:",
        path.relative(cwd, f),
        "=>",
        err?.message || String(err)
      );
    }
  }
  console.log(`Done. Deleted ${deleted} empty file(s).`);
}

if (require.main === module) {
  main();
}
