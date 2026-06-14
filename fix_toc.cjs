const fs = require('fs');
let articles = fs.readFileSync('src/data/articles.ts', 'utf8');
articles = articles.replace(/{ id: 'section-1', title: '一、\*\*买前必看三件事\*\*' }/, "{ id: 'section-1', title: '一、买前必看三件事' }");
fs.writeFileSync('src/data/articles.ts', articles, 'utf8');
