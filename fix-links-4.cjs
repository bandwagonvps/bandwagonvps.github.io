const fs = require('fs');

const f = 'src/components/home/Troubleshooting.tsx';
if (fs.existsSync(f)) {
  let content = fs.readFileSync(f, 'utf-8');
  content = content.replace(/link:\s*'\/troubleshooting'/g, "link: '/troubleshoot/'");
  content = content.replace(/link:\s*'\/troubleshoot\/ssh-connection-failed-troubleshooting'/g, "link: '/troubleshoot/ssh-connection-failed-troubleshooting/'");
  fs.writeFileSync(f, content);
  console.log(`Updated ${f}`);
}
