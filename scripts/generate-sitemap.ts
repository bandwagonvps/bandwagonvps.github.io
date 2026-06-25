import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import articles directly from built or source if possible.
// Wait, we can't easily import a .ts file directly in a .js node script without ts-node or similar.
// Since we have tsx, we can run this script with tsx.

import { startArticles, chooseArticles, alternativesArticles, troubleshootArticles } from '../src/data/articles.ts';

const DOMAIN = 'https://bandwagonvps.github.io';

function generateSitemap() {
  const routes = [
    '/',
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

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => {
  const urlPath = route === '/' ? route : (route.endsWith('/') ? route : `${route}/`);
  return `  <url>
    <loc>${DOMAIN}${urlPath}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent, 'utf-8');
  
  const txtContent = routes.map(route => {
    const urlPath = route === '/' ? route : (route.endsWith('/') ? route : `${route}/`);
    return `${DOMAIN}${urlPath}`;
  }).join('\n');
  fs.writeFileSync(path.join(publicDir, 'sitemap.txt'), txtContent, 'utf-8');
  
  const robotsContent = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
Sitemap: ${DOMAIN}/sitemap.txt`;
  
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent, 'utf-8');
  
  console.log('Sitemap and robots.txt generated successfully!');
}

generateSitemap();
