const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const outDir = "/cursor/stores/self/media";
fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "/usr/local/bin/google-chrome",
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });
  const page = await browser.newPage({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
  });

  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  const homePath = path.join(outDir, "demo-home-category-grid.png");
  await page.screenshot({ path: homePath, fullPage: false });
  console.log("wrote", homePath);

  await page.goto("http://localhost:3000/category/early-manned", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(500);
  const introPath = path.join(outDir, "demo-intro-early-manned.png");
  await page.screenshot({ path: introPath, fullPage: false });
  console.log("wrote", introPath);

  await page.goto("http://localhost:3000/category/modern-spaceflight/quiz", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(500);
  const quizPath = path.join(outDir, "demo-quiz-modern-spaceflight.png");
  await page.screenshot({ path: quizPath, fullPage: false });
  console.log("wrote", quizPath);

  await page.goto("http://localhost:3000/category/to-the-moon/quiz", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(400);
  const moonPath = path.join(outDir, "demo-quiz-to-the-moon.png");
  await page.screenshot({ path: moonPath, fullPage: false });
  console.log("wrote", moonPath);

  await page.goto("http://localhost:3000/category/solar-system/quiz", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(400);
  const solarPath = path.join(outDir, "demo-quiz-solar-system.png");
  await page.screenshot({ path: solarPath, fullPage: false });
  console.log("wrote", solarPath);

  // quick interaction: answer one question
  await page.goto("http://localhost:3000/category/early-manned/quiz", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(400);
  await page.locator(".answer-btn").first().click();
  await page.waitForTimeout(500);
  const answeredPath = path.join(outDir, "demo-quiz-answer-selected.png");
  await page.screenshot({ path: answeredPath, fullPage: false });
  console.log("wrote", answeredPath);

  await browser.close();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
