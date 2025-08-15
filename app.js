const { execSync } = require("child_process");

const target = process.env.TARGET_URL || "https://junpyomaygem.carrd.co/"; // 目标网站
console.log(`开始镜像网站: ${target}`);

try {
  execSync(
    `wget --mirror --convert-links --adjust-extension --page-requisites --no-parent ${target} -P public`,
    { stdio: "inherit" }
  );
  console.log("镜像完成");
} catch (err) {
  console.error("镜像失败", err);
  process.exit(1);
}
