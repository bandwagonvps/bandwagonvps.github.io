import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { chromium } from 'playwright';
import { startArticles, chooseArticles, alternativesArticles, troubleshootArticles } from '../src/data/articles.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const routes = [
    '/',
    '/about',
    '/after-buy',
    '/tools',
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

  // Disable Jekyll on GitHub pages
  fs.writeFileSync(path.join(distDir, '.nojekyll'), '', 'utf-8');
  // Fallback 404
  fs.writeFileSync(path.join(distDir, '404.html'), indexHtml, 'utf-8');

  // Start Express server to serve the built static files
  const app = express();
  app.use(express.static(distDir));
  // Provide index.html fallback for client-side routing during prerender
  app.get('*', (req, res) => res.sendFile(indexHtmlPath));
  
  const server = app.listen(0, async () => {
    const port = server.address().port;
    console.log(`Prerender server running on port ${port}`);

    try {
      const browser = await chromium.launch();
      
      for (const route of routes) {
        console.log(`Prerendering ${route}...`);
        const page = await browser.newPage();
        
        // Go to the page and wait for the network to be idle
        await page.goto(`http://localhost:${port}${route}`, { waitUntil: 'networkidle' });
        
        // Wait for React to mount and render into #root
        await page.waitForSelector('#root > *', { timeout: 10000 }).catch(() => {});
        
        // Wait an extra moment to ensure dynamic content (like icons/layout) is settled
        await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 500)));

        const html = await page.content();
        
        // Remove leading slash
        const relativeRoute = route.startsWith('/') ? route.slice(1) : route;
        
        if (relativeRoute) {
          const dir = path.join(distDir, relativeRoute);
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }
          fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
        } else {
          fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf-8');
        }
        
        await page.close();
      }
      
      await browser.close();
      console.log('Prerendering completed successfully.');
    } catch (e) {
      console.error('Prerendering failed:', e);
      process.exitCode = 1;
    } finally {
      server.close();
    }
  });
}

run();
