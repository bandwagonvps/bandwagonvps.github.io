import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
    if (req.method === "OPTIONS") {
      res.sendStatus(200);
      return;
    }
    next();
  });

  // Add a health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Proxy endpoint for BWG products.json
  app.get("/api/stock-status", async (req, res) => {
    try {
      const response = await fetch("https://stock.bwg.net/products.json", {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; BWG Stock Checker/1.0)'
        }
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch stock data: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Error fetching stock status:", error);
      res.status(500).json({ error: "Failed to fetch stock data" });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    // Vite middleware for development
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: false, watch: null },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Static file serving for production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // SPA fallback
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
