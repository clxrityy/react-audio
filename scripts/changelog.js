/**
 * Copies the `CHANGELOG.md` from packages/main to the documentation content mdx folder.
 * This is used to ensure that the changelog is always up-to-date in the documentation.
 */

const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "../packages/main", "CHANGELOG.md");
const destination = path.join(__dirname, "../apps/docs/content", "changelog.mdx");

// Ensure the destination directory exists
fs.mkdirSync(path.dirname(destination), {
  recursive: true
});

try {
  fs.copyFileSync(source, destination);
  console.log("Changelog copied successfully.");
} catch (error) {
  console.error("Error copying changelog:", error);
  process.exit(1);
}
