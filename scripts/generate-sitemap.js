import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://www.mbfinishtech.com";
const TODAY = new Date().toISOString().split("T")[0];

const staticRoutes = [
  { path: "", changefreq: "weekly", priority: "1.0", lastmod: TODAY },
  { path: "/about", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { path: "/catalogue", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { path: "/products", changefreq: "weekly", priority: "0.9", lastmod: TODAY },
  { path: "/products/category/tank", changefreq: "weekly", priority: "0.8", lastmod: TODAY },
  { path: "/products/category/dishend", changefreq: "weekly", priority: "0.8", lastmod: TODAY },
  { path: "/products/category/sheet", changefreq: "weekly", priority: "0.8", lastmod: TODAY },
  { path: "/products/category/pipe", changefreq: "weekly", priority: "0.8", lastmod: TODAY },
  { path: "/products/category/centerless", changefreq: "weekly", priority: "0.8", lastmod: TODAY },
  { path: "/products/category/utensil", changefreq: "weekly", priority: "0.8", lastmod: TODAY },
  { path: "/products/category/custom", changefreq: "weekly", priority: "0.8", lastmod: TODAY },
  { path: "/clients", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { path: "/application", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { path: "/services", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { path: "/contact", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { path: "/finishes", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { path: "/career", changefreq: "monthly", priority: "0.7", lastmod: TODAY },
  { path: "/gallery", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { path: "/blog", changefreq: "weekly", priority: "0.8", lastmod: TODAY },
];

// Extract product IDs from src/data/siteContent.ts
const siteContentPath = path.resolve(__dirname, "../src/data/siteContent.ts");
const siteContentText = fs.readFileSync(siteContentPath, "utf8");
const productIds = [];
const productMatches = siteContentText.matchAll(/id:\s*["']([^"']+)["']/g);
for (const match of productMatches) {
  // Only include if it's in the products array
  if (!productIds.includes(match[1]) && match[1] !== "all") {
    productIds.push(match[1]);
  }
}

const productRoutes = productIds.map((id) => ({
  path: `/products/${id}`,
  changefreq: "monthly",
  priority: "0.8",
  lastmod: TODAY,
}));

// Extract blog post IDs from src/data/blogContent.ts
const blogContentPath = path.resolve(__dirname, "../src/data/blogContent.ts");
const blogContentText = fs.readFileSync(blogContentPath, "utf8");
const blogIds = [];
const blogMatches = blogContentText.matchAll(/id:\s*["']([^"']+)["']/g);
for (const match of blogMatches) {
  if (!blogIds.includes(match[1])) {
    blogIds.push(match[1]);
  }
}

// Specific lastmod mappings requested by client
const blogLastModMap = {
  "torispherical-vs-elliptical-dish-end-polishing": "2026-11-20",
  "how-to-achieve-mirror-finish-on-stainless-steel-tanks": "2026-11-20",
  "what-is-a-centerless-pipe-polishing-machine": "2026-11-20",
  "centerless-vs-conventional-pipe-polishing-machines": "2026-11-20",
  "surface-roughness-ra-grit-stainless-steel-finishes": "2026-11-24",
  "electropolishing-vs-mechanical-polishing": "2026-11-24",
  "pharma-dairy-tank-finishing-standards": "2026-11-24",
  "polishing-machine-roi-automation-payback": "2026-11-24",
};

const blogRoutes = blogIds.map((id) => {
  const lm = blogLastModMap[id] || TODAY;
  return {
    path: `/blog/${id}`,
    changefreq: "monthly",
    priority: "0.7",
    lastmod: lm,
  };
});

const allRoutes = [...staticRoutes, ...productRoutes, ...blogRoutes];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

for (const r of allRoutes) {
  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}${r.path}</loc>\n`;
  xml += `    <lastmod>${r.lastmod}</lastmod>\n`;
  xml += `    <changefreq>${r.changefreq}</changefreq>\n`;
  xml += `    <priority>${r.priority}</priority>\n`;
  xml += `  </url>\n`;
}

xml += `</urlset>\n`;

const publicPath = path.resolve(__dirname, "../public/sitemap.xml");
fs.writeFileSync(publicPath, xml, "utf8");
console.log(`Generated public/sitemap.xml with ${allRoutes.length} URLs!`);

const distPath = path.resolve(__dirname, "../dist/sitemap.xml");
if (fs.existsSync(path.dirname(distPath))) {
  fs.writeFileSync(distPath, xml, "utf8");
  console.log(`Copied sitemap to dist/sitemap.xml!`);
}
