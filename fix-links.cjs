const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', (f) => {
  if (!f.endsWith('.tsx') && !f.endsWith('.ts')) return;
  
  let content = fs.readFileSync(f, 'utf-8');
  let original = content;
  
  // Replace static links: to="/something" -> to="/something/" (except when it's to="/")
  content = content.replace(/to="\/([a-zA-Z0-9\-_]+)"/g, 'to="/$1/"');
  
  // Replace static nested links: to="/something/something" -> to="/something/something/"
  content = content.replace(/to="\/([a-zA-Z0-9\-_]+)\/([a-zA-Z0-9\-_]+)"/g, 'to="/$1/$2/"');
  
  // Replace dynamic links: to={`/something/${slug}`} -> to={`/something/${slug}/`}
  content = content.replace(/to=\{`\/([a-zA-Z0-9\-_]+)\/\$\{([^}]+)\}`\}/g, 'to={`/$1/${$2}/`}');

  // Replace links with two parts dynamic: to={`/${category}/${slug}`} -> to={`/${category}/${slug}/`}
  content = content.replace(/to=\{`\/\$\{([^}]+)\}\/\$\{([^}]+)\}`\}/g, 'to={`/${$1}/${$2}/`}');
  
  // Replace static href: href="/something" -> href="/something/"
  content = content.replace(/href="\/([a-zA-Z0-9\-_]+)"/g, 'href="/$1/"');
  
  if (original !== content) {
    fs.writeFileSync(f, content);
    console.log(`Updated ${f}`);
  }
});
