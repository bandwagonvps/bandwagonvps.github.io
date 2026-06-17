const fs = require('fs');
const file = 'src/data/articles.ts';
let code = fs.readFileSync(file, 'utf8');

// Also remove ** from TOC globally
code = code.replace(/title:\s*'(.*?)(\*\*)(.*?)(\*\*)(.*?)'/g, (match, p1, p2, p3, p4, p5) => {
    return `title: '${p1}${p3}${p5}'`;
});
code = code.replace(/title:\s*'(.*?)(\*\*)(.*?)(\*\*)(.*?)'/g, (match, p1, p2, p3, p4, p5) => {
    return `title: '${p1}${p3}${p5}'`;
});

// For the specific article, strip ** from headings
const startMarker = `slug: 'bandwagonhost-cn2-gia-review'`;
const startIndex = code.indexOf(startMarker);
if (startIndex !== -1) {
  let nextSlug = code.indexOf(`slug: '`, startIndex + 10);
  if (nextSlug === -1) nextSlug = code.length;

  let articleSection = code.substring(startIndex, nextSlug);

  // Remove ** from ## and ### headings
  articleSection = articleSection.replace(/^(#+)\s+\*\*([^\*]+)\*\*\s*$/gm, "$1 $2");
  
  // Also remove "贵一点" quotes that we missed or any other thing
  // Actually fix2.cjs already removed all “” so we're good on that.
  
  code = code.substring(0, startIndex) + articleSection + code.substring(nextSlug);
}

fs.writeFileSync(file, code, 'utf8');
console.log('Done fix 3.');
