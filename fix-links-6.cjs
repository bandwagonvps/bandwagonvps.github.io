const fs = require('fs');
const f = 'scripts/post-build.ts';
let content = fs.readFileSync(f, 'utf-8');
content = content.replace("'/about',", "'/about',\n    '/after-buy',\n    '/tools',");
fs.writeFileSync(f, content);
console.log('updated');
