# Aimin Jayamon — Portfolio Website

A responsive dark premium personal portfolio built with React, Vite and CSS.

## Requirements
- Node.js (LTS)
- VS Code
- Internet connection for the Google Fonts stylesheet

## Run locally

1. Extract this project folder.
2. Open the folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL shown in the terminal (usually http://localhost:5173).

## Personalise before publishing

Open `src/App.jsx` and:
- Update the About Me text.
- Add or remove skills in the `skills` array.
- Update project descriptions and add real repository URLs in each project's `link`.
- Replace `your-email@example.com` with your email.
- Replace the GitHub and LinkedIn profile links with your own.

Do not claim a skill or project you have not actually worked on. Add screenshots or live project links when available.

## Build for production

```bash
npm run build
npm run preview
```

The production website is generated in the `dist` folder.

## Publish free with GitHub Pages

This project uses Vite. For a repository named `my-portfolio`:

1. Open `vite.config.js` and set `base: "/my-portfolio/"`.
2. Push the project to a GitHub repository named `my-portfolio`.
3. In the repository, open Settings → Pages.
4. Choose GitHub Actions as the deployment source.
5. Create `.github/workflows/deploy.yml` (sample below), commit and push.

If your GitHub username or repository name differs, use the matching repository name in the `base` setting and workflow.

### Deployment workflow

The workflow file is included in `.github/workflows/deploy.yml`.

## Notes
- This is a static portfolio; no backend or database is required.
- The email button uses a `mailto:` link.
- Project links are intentionally blank until you add your real repository URLs.
