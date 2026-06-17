const fs = require('fs');

function replaceInFile(filepath, searchValue, replaceValue) {
  let content = fs.readFileSync(filepath, 'utf8');
  content = content.replace(new RegExp(searchValue, 'g'), replaceValue);
  fs.writeFileSync(filepath, content, 'utf8');
}

replaceInFile('src/pages/Article.tsx', ' rounded-xl border border-slate-200 shadow-sm', '');
replaceInFile('src/data/articles.ts', ' bg-white rounded-xl shadow-sm ring-1 ring-slate-200', '');
replaceInFile('src/data/articles.ts', ' rounded-xl border border-slate-200 shadow-sm', '');

console.log('done!');
