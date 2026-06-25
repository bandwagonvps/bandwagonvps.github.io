const fs = require('fs');

const files = [
  'src/components/home/UserStage.tsx',
  'src/components/home/Roadmap.tsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf-8');
    content = content.replace(/link:\s*'\/([a-zA-Z0-9\-_]+)'/g, (match, p1) => {
      return `link: '/${p1}/'`;
    });
    // Roadmap uses to="/after-buy"
    content = content.replace(/to="\/([a-zA-Z0-9\-_]+)"/g, (match, p1) => {
      return `to="/${p1}/"`;
    });
    fs.writeFileSync(f, content);
    console.log(`Updated ${f}`);
  }
});
