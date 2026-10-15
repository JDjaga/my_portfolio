# Jagadiish S.D — AI Engineer & Full-Stack Developer Portfolio

Modern, animated Next.js portfolio for **Jagadiish S.D** (B.Tech AI & Data Science),
showcasing applied-AI systems (RAG copilots, multilingual audio intelligence,
meeting/intelligence platforms) and Dockerized full-stack builds.

- **Stack:** Next.js 16 · React 19 · Tailwind CSS · Three.js · Framer Motion · tsParticles
- **Live sections:** About · Skills · Projects · Experience · Education · Recognition · Contact

## Run locally

Prerequisites: Node.js 20.9+ (22 recommended) and npm.

```powershell
npm install --legacy-peer-deps
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

> The production build uses webpack (`next build --webpack`) for reliable
> Windows builds. Resume downloads from `public/Jagadiish-SD-Resume.docx`;
> replace that file to update the downloadable resume.

## Deploy (GitHub + Netlify)

1. Create an empty repo on GitHub, then:
   ```powershell
   git remote add origin https://github.com/<you>/<repo>.git
   git branch -M main
   git push -u origin main
   ```
2. In Netlify: **Add new site → Import an existing project** → connect the repo.
   Build settings are pre-configured in `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - `NODE_VERSION=22`, `NPM_FLAGS=--legacy-peer-deps`
   - Essential Next.js plugin (auto-installed by Netlify)
3. Deploy. Every push to `main` redeploys automatically.

## Contact

- Email: Jagadiish21@gmail.com
- GitHub: https://github.com/JDjaga
- LinkedIn: http://www.linkedin.com/in/jagadiish-s-d-427273257
