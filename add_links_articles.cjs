const fs = require('fs');
let content = fs.readFileSync('src/data/articles.ts', 'utf8');

const links = [
  { text: '套餐选择器', url: '/tools/plan-selector' },
  { text: '搬瓦工优惠码', url: '/coupon' },
  { text: '搬瓦工退款', url: '/start/bandwagonhost-refund-guide' },
  { text: '搬瓦工套餐推荐', url: '/choose/banwagong-plan-guide' },
  { text: '搬瓦工机房怎么选', url: '/choose/banwagong-data-center-comparison' },
  { text: '搬瓦工适合建站吗', url: '/choose/banwagong-is-it-suitable-for-building-a-website' },
  { text: '搬瓦工是什么', url: '/start/what-is-bandwagonhost' },
  { text: '搬瓦工替代', url: '/alternatives/bandwagonhost-alternatives' },
  { text: '搬瓦工教程', url: '/start/banwagong-tutorial-for-beginners' },
];

// Helper to replace text not inside [] or ()
// We can parse the document, but for simplicity we split by `backticks`, `[`, `]`, `(`, `)`
// Actually, a simpler way is to replace only the first occurrence in each article, or just all occurrences outside links.
// Let's use a regex with negative lookbehind/ahead for markdown brackets:
// We'll replace it and then if we accidentally replace inside a link we can fix it.
// Actually, it's easier to just match text outside markdown links.

function addLinks(text) {
  let result = text;
  links.forEach(link => {
    // Regex that looks for the text, ensuring it is not preceded by [ and not followed by ]
    // This is not perfect but works for simple cases.
    // Instead, let's replace all matching texts, then fix `[[` or `](`
    // A better approach: split the string by markdown links `\[[^\]]+\]\([^)]+\)`
    const parts = result.split(/(\[[^[\]]+\]\([^)]+\))/);
    result = parts.map(part => {
      if (part.startsWith('[')) return part; // It's already a link, leave it
      // Replace text with link
      // Only replace first occurrence per text block to be natural
      return part.replace(new RegExp(link.text, 'g'), `[${link.text}](${link.url})`);
    }).join('');
  });
  return result;
}

content = addLinks(content);
fs.writeFileSync('src/data/articles.ts', content, 'utf8');
console.log('Links added');
