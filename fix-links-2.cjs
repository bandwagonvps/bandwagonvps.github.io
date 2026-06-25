const fs = require('fs');

const files = [
  'src/components/layout/Footer.tsx',
  'src/components/layout/Navbar.tsx',
  'src/components/home/Tools.tsx',
  'src/pages/Tool.tsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf-8');
    content = content.replace(/path:\s*'\/([a-zA-Z0-9\-_/]+)'/g, (match, p1) => {
      if (p1.endsWith('/')) return match;
      return `path: '/${p1}/'`;
    });
    fs.writeFileSync(f, content);
  }
});

const toolsFile = 'src/components/home/Tools.tsx';
if (fs.existsSync(toolsFile)) {
  let content = fs.readFileSync(toolsFile, 'utf-8');
  content = content.replace(/path:\s*'\/([a-zA-Z0-9\-_/]+)'/g, (match, p1) => {
      if (p1.endsWith('/')) return match;
      return `path: '/${p1}/'`;
  });
  fs.writeFileSync(toolsFile, content);
}
