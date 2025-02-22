const fs = require("fs");
const path = require("path");

const indexPath = path.join(__dirname, "../docs", "index.html");

fs.readFile(indexPath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading index.html", err);
    process.exit(1);
  }

  // Replace absolute asset paths with relative ones (e.g., '/assets' to './assets')
  let updatedData = data
    .replace(/href="\/assets/g, 'href="./assets')
    .replace(/src="\/assets/g, 'src="./assets');

  updatedData = updatedData.replace(
    /<meta name="dscription"[^>]*>/,
    '<meta name="description" content="A collection of audio components for React applications" />'
  );
  updatedData = updatedData.replace(/<link rel="icon"[^>]*>/, "");
  updatedData = updatedData.replace(/<link rel="apple-touch-icon"[^>]*>/, "");
  updatedData = updatedData.replace(/<link rel="manifest"[^>]*>/, "");
  updatedData = updatedData.replace(
    /<title>Ladle<\/title>/, ""
  );

  fs.writeFile(indexPath, updatedData, 'utf-8', (err) => {
    if (err) {
        console.error("Error writing index.html", err);
        process.exit(1);
    } else {
        console.log("index.html updated successfully");
    }
  })
});
