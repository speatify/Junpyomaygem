# Website Mirror with GitHub Actions (docs version)

This repository mirrors a website using **wget** and stores the result in the `docs/` folder.  
GitHub Pages serves this folder so the site is available without VPN.

- Target site: https://junpyomaygem.carrd.co/
- Output: `docs/` folder (served by GitHub Pages)
- Update: Daily at 10:00 Beijing time

## How to use
1. Upload these files to a new GitHub repo.
2. Go to Settings → Pages:
   - Source: `Deploy from branch`
   - Branch: `main`
   - Folder: `/docs`
3. Save, then go to Actions → Mirror Website → Run workflow.
4. Your mirrored site will be live on GitHub Pages.
