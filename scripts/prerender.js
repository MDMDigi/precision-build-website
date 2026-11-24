import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatePath = path.resolve(__dirname, "../dist/index.html");
const ssrEntryPath = path.resolve(__dirname, "../dist-ssr/entry-server.js");

if (!fs.existsSync(templatePath)) {
  console.error("dist/index.html not found! Run vite build first.");
  process.exit(1);
}

if (!fs.existsSync(ssrEntryPath)) {
  console.error("dist-ssr/entry-server.js not found! Run vite build --ssr first.");
  process.exit(1);
}

const template = fs.readFileSync(templatePath, "utf8");
const { render } = await import(`file://${ssrEntryPath.replace(/\\/g, "/")}`);

// Route list
const staticRoutes = [
  "/",
  "/about",
  "/catalogue",
  "/products",
  "/products/category/tank",
  "/products/category/dishend",
  "/products/category/sheet",
  "/products/category/pipe",
  "/products/category/centerless",
  "/products/category/utensil",
  "/products/category/custom",
  "/clients",
  "/application",
  "/services",
  "/contact",
  "/finishes",
  "/career",
  "/gallery",
  "/blog",
];

// Extract product IDs
const siteContentPath = path.resolve(__dirname, "../src/data/siteContent.ts");
const siteContentText = fs.readFileSync(siteContentPath, "utf8");
const productIds = [];
const productMatches = siteContentText.matchAll(/id:\s*["']([^"']+)["']/g);
for (const match of productMatches) {
  if (!productIds.includes(match[1]) && match[1] !== "all") {
    productIds.push(match[1]);
  }
}
const productRoutes = productIds.map((id) => `/products/${id}`);

// Extract blog post IDs
const blogContentPath = path.resolve(__dirname, "../src/data/blogContent.ts");
const blogContentText = fs.readFileSync(blogContentPath, "utf8");
const blogIds = [];
const blogMatches = blogContentText.matchAll(/id:\s*["']([^"']+)["']/g);
for (const match of blogMatches) {
  if (!blogIds.includes(match[1])) {
    blogIds.push(match[1]);
  }
}
const blogRoutes = blogIds.map((id) => `/blog/${id}`);

const routesToPrerender = [
  ...staticRoutes,
  ...productRoutes,
  ...blogRoutes,
  "/404",
];

console.log(`Starting SSG Prerendering for ${routesToPrerender.length} routes...`);

for (const route of routesToPrerender) {
  try {
    const { appHtml, helmet } = render(route);

    let html = template;

    // Inject Head Elements from react-helmet
    const titleStr = helmet?.title?.toString() || "";
    const metaStr = helmet?.meta?.toString() || "";
    const linkStr = helmet?.link?.toString() || "";
    const scriptStr = helmet?.script?.toString() || "";

    const headInjections = [titleStr, metaStr, linkStr, scriptStr]
      .filter(Boolean)
      .join("\n    ");

    if (headInjections) {
      // Replace existing title if any, or inject before </head>
      if (titleStr && html.includes("<title>")) {
        html = html.replace(/<title>.*?<\/title>/, titleStr);
      }
      html = html.replace("</head>", `    ${headInjections}\n  </head>`);
    }

    // Inject prerendered body HTML
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Determine target file path
    let targetPath;
    if (route === "/" || route === "") {
      targetPath = path.resolve(__dirname, "../dist/index.html");
    } else if (route === "/404") {
      targetPath = path.resolve(__dirname, "../dist/404.html");
    } else {
      const routeDir = path.resolve(__dirname, `../dist${route}`);
      fs.mkdirSync(routeDir, { recursive: true });
      targetPath = path.join(routeDir, "index.html");
    }

    fs.writeFileSync(targetPath, html, "utf8");
  } catch (err) {
    console.error(`Failed to prerender ${route}:`, err);
  }
}

console.log(`Successfully prerendered ${routesToPrerender.length} routes to dist/!`);

// Clean up temporary SSR bundle
try {
  fs.rmSync(path.resolve(__dirname, "../dist-ssr"), { recursive: true, force: true });
  console.log("Cleaned up dist-ssr temporary build.");
} catch (e) {
  // ignore
}

