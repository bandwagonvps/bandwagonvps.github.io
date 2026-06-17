const fs = require('fs');
const file = 'src/data/articles.ts';
let code = fs.readFileSync(file, 'utf8');

const startMarker = `slug: 'bandwagonhost-cn2-gia-review'`;
const startIndex = code.indexOf(startMarker);
if (startIndex === -1) {
  console.error('Article not found');
  process.exit(1);
}

let nextSlug = code.indexOf(`slug: '`, startIndex + 10);
if (nextSlug === -1) nextSlug = code.length;

let articleSection = code.substring(startIndex, nextSlug);

// Replace “...” with **“...”**
articleSection = articleSection.replace(/“([^”]+)”/g, '**“$1”**');

code = code.substring(0, startIndex) + articleSection + code.substring(nextSlug);

fs.writeFileSync(file, code, 'utf8');
console.log('Done replacing.');
