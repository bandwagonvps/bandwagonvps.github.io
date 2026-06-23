import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { startArticles, chooseArticles, alternativesArticles, troubleshootArticles } from '../src/data/articles.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function run() {
  const routes = [
    '/about',
    '/start',
    '/choose',
    '/alternatives',
    '/troubleshoot',
    '/tools/plan-selector',
    '/coupon',
    '/stock',
    '/sitemap',
  ];

  startArticles.forEach(a => routes.push(`/start/${a.slug}`));
  chooseArticles.forEach(a => routes.push(`/choose/${a.slug}`));
  alternativesArticles.forEach(a => routes.push(`/alternatives/${a.slug}`));
  troubleshootArticles.forEach(a => routes.push(`/troubleshoot/${a.slug}`));

  const distDir = path.join(__dirname, '../dist');
  const indexHtmlPath = path.join(distDir, 'index.html');

  if (!fs.existsSync(indexHtmlPath)) {
    console.error('dist/index.html not found. Run vite build first.');
    return;
  }

  const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

  // Create a 404.html for any unhandled routes
  fs.writeFileSync(path.join(distDir, '404.html'), indexHtml, 'utf-8');

  routes.forEach(route => {
    // Remove leading slash
    const relativeRoute = route.startsWith('/') ? route.slice(1) : route;
    // Create directory
    const dir = path.join(distDir, relativeRoute);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    // Write index.html
    fs.writeFileSync(path.join(dir, 'index.html'), indexHtml, 'utf-8');
  });

  console.log('Post-build: copied index.html to 404.html and all static route folders.');
}

run();
