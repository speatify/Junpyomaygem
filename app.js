const fs = require("fs");
const puppeteer = require("puppeteer");

(async () => {
  const target = process.env.TARGET_URL || "https://junpyomaygem.carrd.co/";

  if (!fs.existsSync("public")) {
    fs.mkdirSync("public");
  }

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
  );

  await page.goto(target, { waitUntil: "networkidle2" });

  const html = await page.content();
  fs.writeFileSync("public/index.html", html);

  await browser.close();
  console.log(`✅ 已成功镜像: ${target}`);
})();
