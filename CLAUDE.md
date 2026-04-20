# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run serve` — dev server at http://localhost:4200 (alias for `nx run wanieldeiss:serve:development`)
- `npm run build:production` — production build to `dist/apps/wanieldeiss/browser`
- `npx nx test wanieldeiss` — Jest unit tests
- `npx nx test wanieldeiss -t "<pattern>"` — run a single test by name pattern
- `npx nx test wanieldeiss --testFile=<relative-path>` — run a single test file
- `npx nx lint wanieldeiss` — ESLint (flat config, `eslint.config.js` at repo root)
- `npx nx e2e wanieldeiss-e2e` — Playwright across chromium, firefox, webkit; spins up the dev server via `webServer` in `apps/wanieldeiss-e2e/playwright.config.ts`

Nx Cloud is explicitly disabled (`neverConnectToCloud: true` in `nx.json`).

## Architecture

**Nx 22.6 monorepo, single Angular 21 app.** `apps/wanieldeiss` is the portfolio; `apps/wanieldeiss-e2e` is Playwright. There is no `libs/` directory and no shared-type path alias — section data and its types are colocated in `*.data.ts` files next to the component that owns them (see [experience.data.ts](apps/wanieldeiss/src/app/components/experience/experience.data.ts), where `interface Experience` lives alongside the `EXPERIENCE` array). If shared types do become necessary, add a `libs/interfaces/` lib — don't spin up a new app.

**Single-page portfolio, not a multi-route app.** Routes in [apps/wanieldeiss/src/app/app.routes.ts](apps/wanieldeiss/src/app/app.routes.ts) are `''` → `IndexPage`, `not-found` → `NotFoundPage`, `**` → redirect to `not-found`. [IndexPage](apps/wanieldeiss/src/app/pages/index/index.page.ts) composes every section (hero, about, stack, experience, projects, contact) into one long-scroll page with anchor ids (`#about`, `#stack`, …). "Add a page" usually means "add a section component to IndexPage," not a new route.

**Tailwind v4 with semantic CSS-variable tokens.** [apps/wanieldeiss/src/styles.css](apps/wanieldeiss/src/styles.css) defines `--color-surface`, `--color-fg-*`, `--color-accent*`, etc. under `:root` and overrides them inside `.dark`. Tailwind utilities reference them via `@theme inline`, so dark/light swap is a single class toggle at runtime. Custom utilities (e.g. `@utility focus-ring`) belong in this file — per-component CSS has a hard 4 KB budget (see below), so shared treatments must be centralized.

**Dark mode is class-based, default dark, boot-scripted.** [ThemeService](apps/wanieldeiss/src/app/ui/theme/theme.service.ts) (signal-based, `@Injectable({providedIn: 'root'})`) is the source of truth and mirrors the active theme onto `<html>.dark` through an `effect`. The inline `<script>` in [apps/wanieldeiss/src/index.html](apps/wanieldeiss/src/index.html) runs before body parse to apply the persisted theme and prevent a flash — any change to storage key (`wd-theme`) or default must be made in both places.

**Fonts are self-hosted.** `@fontsource-variable/fraunces` (display) and `@fontsource-variable/inter` (body) are pulled in via `styles` in [apps/wanieldeiss/project.json](apps/wanieldeiss/project.json). This is intentional — GDPR + Sonar SRI (Web:S5725). Don't swap in a `<link>` to Google Fonts.

**Strict CSS budgets.** `apps/wanieldeiss/project.json` caps initial JS at 500 KB warn / 1 MB error and **any component style at 2 KB warn / 4 KB error**. If a component style is crowding the budget, extract a utility into `styles.css` rather than inlining.

## Conventions

- Standalone components only; `ChangeDetectionStrategy.OnPush` everywhere.
- Selector prefix is `wd-` (set via `prefix: "wd"` in `apps/wanieldeiss/project.json`). ESLint enforces this.
- Barrels: [apps/wanieldeiss/src/app/components/index.ts](apps/wanieldeiss/src/app/components/index.ts) and [apps/wanieldeiss/src/app/ui/index.ts](apps/wanieldeiss/src/app/ui/index.ts) re-export public surface. When adding a component, add the export here — other features import from the barrel, not the file.
- Generators in `nx.json` use `typeSeparator: "."`, so generated files are `foo.guard.ts` / `foo.pipe.ts` (dot, not hyphen).
- `@nx/enforce-module-boundaries` is on in `eslint.config.js` — if `libs/` gets introduced, tags will need to be added to `project.json` files.

## Deployment

Production is **GitHub Pages** (custom domain via `apps/wanieldeiss/public/CNAME`), shipped by [.github/workflows/gh-page.yml](.github/workflows/gh-page.yml) on push to `main`. It runs `npx nx build wanieldeiss --configuration=production` and uploads `dist/apps/wanieldeiss/browser`.

[apps/wanieldeiss/public/404.html](apps/wanieldeiss/public/404.html) is the SPA fallback: GitHub Pages serves it for any unknown path, and it rewrites the URL back to `/` so the Angular router resolves deep links client-side. Don't delete it or the app will 404 on direct navigation to non-root URLs.

This repo is **not** deployed to Vercel — ignore Next.js/Vercel suggestions that may surface from session hooks.
