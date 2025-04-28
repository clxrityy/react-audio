// const fs = require('fs')
// const path = require('path')

// const indexPath = path.join(__dirname, '../docs', 'index.html')

// fs.readFile(indexPath, 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading index.html', err)
//     process.exit(1)
//   }

//   // Replace absolute asset paths with relative ones (e.g., '/assets' to './assets')
//   let updatedData = data
//     .replace(/href="\/assets/g, 'href="./assets')
//     .replace(/src="\/assets/g, 'src="./assets')

//   updatedData = updatedData.replace(/<meta name="dscription"[^>]*>/, '')
//   updatedData = updatedData.replace(/<link rel="icon"[^>]*>/, '')
//   updatedData = updatedData.replace(/<link rel="apple-touch-icon"[^>]*>/, '')
//   updatedData = updatedData.replace(/<link rel="manifest"[^>]*>/, '')
//   updatedData = updatedData.replace(/<title>Ladle<\/title>/, '')

//   updatedData = updatedData.replace(/<link rel="mask-icon"[^>]*>/, '')

//   fs.writeFile(indexPath, updatedData, 'utf-8', (err) => {
//     if (err) {
//       console.error('Error writing index.html', err)
//       process.exit(1)
//     } else {
//       console.log('index.html updated successfully')
//     }
//   })
// })

const fs = require("fs");
const path = require("path");

const indexPath = path.join(__dirname, "../docs", "index.html");

// Your manifest link (replace with your actual manifest file if needed)
const myManifestLink = `<link rel="manifest" href="./manifest.json" />`;

fs.readFile(indexPath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading index.html", err);
    process.exit(1);
  }

  // Replace absolute asset paths with relative ones (e.g., '/assets' to './assets')
  let updatedData = data
    .replace(/href="\/assets/g, 'href="./assets')
    .replace(/src="\/assets/g, 'src="./assets');

  // Remove meta description
  updatedData = updatedData.replace(/<meta\s+name="description"[^>]*>\s*/i, "");

  // Remove all manifest links and insert your manifest link after <head>
  updatedData = updatedData.replace(/<link\s+rel="manifest"[^>]*>\s*/gi, "");
  updatedData = updatedData.replace(
    /<head([^>]*)>/i,
    `<head$1>\n    ${myManifestLink}`
  );

  // Remove other unwanted tags
  updatedData = updatedData.replace(/<link rel="icon"[^>]*>/g, "");
  updatedData = updatedData.replace(
    /<link rel="apple-touch-icon"[^>]*>/g,
    `<link rel="apple-touch-icon" href="./assets/apple-touch-icon.png" />`
  );
  updatedData = updatedData.replace(/<title>Ladle<\/title>/, "");
  updatedData = updatedData.replace(/<link rel="mask-icon"[^>]*>/g, "");

  fs.writeFile(indexPath, updatedData, "utf-8", (err) => {
    if (err) {
      console.error("Error writing index.html", err);
      process.exit(1);
    } else {
      console.log("index.html updated successfully");
    }
  });
});
