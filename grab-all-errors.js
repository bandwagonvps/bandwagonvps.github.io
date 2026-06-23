import { chromium } from 'playwright';

const routes = [
  '/',
  '/start',
  '/stock',
  '/tool',
  '/choose',
  '/alternatives',
  '/troubleshoot',
  '/coupon',
  '/sitemap',
  '/about',
  '/article/getting-started'
];

async function run() {
  const browser = await chromium.launch();
  
  for (const route of routes) {
    console.log(`Checking ${route}...`);
    const page = await browser.newPage();
    page.on('pageerror', error => console.log('PAGE ERROR on', route, ':', error.message));
    
    await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle' });
    await page.close();
  }
  
  await browser.close();
  console.log('Done.');
}

run().catch(console.error);
