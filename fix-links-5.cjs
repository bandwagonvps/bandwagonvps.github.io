const fs = require('fs');

const f = 'src/pages/Article.tsx';
if (fs.existsSync(f)) {
  let content = fs.readFileSync(f, 'utf-8');
  content = content.replace(/const categoryPath = `\/\$\{article.category\}`;/g, 'const categoryPath = `/${article.category}/`;');
  fs.writeFileSync(f, content);
  console.log(`Updated ${f}`);
}
