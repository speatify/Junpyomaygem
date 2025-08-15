# Mirror Site 模板

这是一个自动镜像网站并部署到 GitHub Pages 的模板。

## 使用步骤
1. Fork 本仓库
2. 编辑 `.github/workflows/mirror.yml`  
   把 `https://目标网站.com` 改成你想镜像的地址
3. 启用 GitHub Pages（Settings → Pages → 选择 `gh-pages` 分支）
4. 等待 Actions 自动运行，完成后访问你的 Pages 链接
5. 可选：用 Cloudflare 加速，绑定国内可访问的域名
