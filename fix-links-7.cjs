const fs = require('fs');
let content = fs.readFileSync('src/pages/Sitemap.tsx', 'utf-8');
content = content.replace(/to="\/tool\/"/g, 'to="/tools/plan-selector/"');
fs.writeFileSync('src/pages/Sitemap.tsx', content);
console.log('fixed');
