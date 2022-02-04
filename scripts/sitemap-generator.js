const sitemap = require('nextjs-sitemap-generator');
const fs = require('fs');
const path = require('path');

sitemap({
  baseUrl: "https://www.carbula.com",
  pagesDirectory: path.resolve(__dirname, '../public/'),
  targetDirectory:path.resolve(__dirname, '../public/'),
  ignoredExtensions: ["js", "map", "json", "xml", "png", "jpg", "jpeg", "svg","ico"],
  ignoredPaths: ["[fallback]"],
  allowFileExtensions: true
});

// Run: "npm run generate:sitemap" to generate the file.