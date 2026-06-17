const fs = require('fs');

function replaceInFile(filepath, searchValue, replaceValue) {
  let content = fs.readFileSync(filepath, 'utf8');
  content = content.replace(new RegExp(searchValue, 'g'), replaceValue);
  fs.writeFileSync(filepath, content, 'utf8');
}

replaceInFile('src/pages/Article.tsx', ' whitespace-nowrap', '');
replaceInFile('src/data/articles.ts', 'overflow-x-auto', '');

console.log('done!');
