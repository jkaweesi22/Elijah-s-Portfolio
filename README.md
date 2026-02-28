# Elijah Biimbwa — Creative Portfolio

A modern, static creative portfolio for **Elijah Biimbwa**, a designer specializing in graphic design, brand identity, social media, and marketing materials.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **lucide-react** for icons

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (Production)

```bash
npm run build
```

Output is generated to the `./out` directory.

## Deploy to GitHub Pages

### Project Site (e.g. `username.github.io/Elijah-s-Portfolio`)

1. Push your code to a GitHub repository.
2. Go to **Settings → Pages** in your repo.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Push to the `main` branch.

The workflow in `.github/workflows/deploy.yml` will build with `NEXT_PUBLIC_BASE_PATH` set automatically and deploy `./out` to GitHub Pages.

### User Site (e.g. `username.github.io`)

To deploy as a user site, edit `.github/workflows/deploy.yml` and set:

```yaml
env:
  NEXT_PUBLIC_BASE_PATH: ""
```

## Test Build with Base Path

To test the project site build locally:

```bash
NEXT_PUBLIC_BASE_PATH=/Elijah-s-Portfolio npm run build
```

Then serve the `./out` folder (e.g. with `npx serve out`).

## Content

All content is stored in JSON under `/data`:

| File | Purpose |
|------|---------|
| `data/site-config.json` | Site name, nav, social links, contact, profile image |
| `data/pages/home.json` | Hero, sections, CTA |
| `data/pages/about.json` | Story, philosophy, tools, process |
| `data/pages/contact.json` | Contact page content |
| `data/content/projects.json` | Portfolio projects |
| `data/content/testimonials.json` | Client testimonials |

### Adding Your Images

1. **Profile photo**: Add `elijah.jpg` to `public/images/` and set `profileImage: "/images/elijah.jpg"` in `site-config.json`.
2. **Project images**: Add project images to `public/images/projects/` and reference them in `projects.json` (e.g. `"/images/projects/my-project-1.jpg"`), or use external URLs.

## Project Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Home)
│   ├── work/page.tsx
│   ├── work/[slug]/page.tsx
│   ├── about/page.tsx
│   ├── testimonials/page.tsx
│   └── contact/page.tsx
├── components/
├── data/
├── lib/
├── public/images/
└── .github/workflows/deploy.yml
```

## Features

- Static export (no server, no API routes)
- Dark mode (light / dark / system)
- Responsive design
- SEO metadata and JSON-LD
- GitHub Pages ready with base path support
- Contact form (mailto) — integrate Formspree for backend submission

## Customization

- **SEO**: Update `lib/seo.ts` with your GitHub username or custom domain for `baseUrl`.
- **Theme**: Colors are defined in `app/globals.css` (blue-green palette).
- **Fonts**: DM Serif Display (headings), DM Sans (body) in `app/layout.tsx`.
