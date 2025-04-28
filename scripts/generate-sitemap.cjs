const fs = require("fs");
const path = require("path");

const metaPath = path.join(__dirname, "../docs/meta.json");
const sitemapPath = path.join(__dirname, "../docs/sitemap.xml");

// Change this to your site's base URL
const BASE_URL = "https://clxrityy.github.io/react-audio";

function escapeXml(str) {
  return str.replace(
    /[<>&'"]/g,
    (c) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "'": "&apos;",
        '"': "&quot;",
      }[c])
  );
}

fs.readFile(metaPath, "utf8", (err, data) => {
  if (err) {
    console.error("Failed to read meta.json:", err);
    process.exit(1);
  }

  const meta = JSON.parse(data);
  const urls = [];

  // Add homepage
  urls.push(`${BASE_URL}/`);

  // Add story routes
  if (meta.stories) {
    for (const [key, story] of Object.entries(meta.stories)) {
      // Example: /?story=oscillator--default
      urls.push(`${BASE_URL}/?story=${encodeURIComponent(key)}`);
    }
  }

  // Generate sitemap.xml content
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`).join("\n") +
    `\n</urlset>\n`;

  fs.writeFile(sitemapPath, xml, "utf8", (err) => {
    if (err) {
      console.error("Failed to write sitemap.xml:", err);
      process.exit(1);
    }
    console.log("sitemap.xml generated successfully");
  });
});
