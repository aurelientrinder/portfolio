# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:4321
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build locally
```

## Architecture

Minimalistic Astro portfolio site deployed to Vercel at aurelientrinder.com.

### Structure

- `src/pages/index.astro` - Single page displaying project grid
- `src/components/ProjectCard.astro` - Reusable project card component
- `src/content/projects.json` - Project data (edit this to add/remove projects)
- `src/layouts/Layout.astro` - Base HTML layout with meta tags
- `src/styles/global.css` - CSS variables and resets
- `public/projects/` - Project thumbnail images

### Adding a Project

Edit `src/content/projects.json`:

```json
{
  "title": "Project Name",
  "description": "Brief description (1-2 sentences)",
  "image": "/projects/project-name.png",
  "tags": ["Tech", "Stack"],
  "demo": "https://demo-url.com",
  "github": "https://github.com/user/repo"
}
```

Place thumbnail images (16:9 aspect ratio recommended) in `public/projects/`.

### Design System

CSS variables in `global.css`:
- `--bg`: Background (#fafafa)
- `--text`: Primary text (#1a1a1a)
- `--text-muted`: Secondary text (#666)
- `--border`: Borders (#e5e5e5)
- `--card-bg`: Card background (#fff)
