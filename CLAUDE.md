# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jekyll-based documentation site for Koala Sampler (iOS/Android/Mac/Windows music app). Generates mobile, tablet, and desktop views from a single documentation source, plus a downloadable PDF manual.

## Commands

### Local Development
```shell
rvm use                        # Select Ruby 3.1.4
bundle install                 # Install Ruby dependencies
bundle exec jekyll serve       # Dev server at http://localhost:4000
```

### Production Build (includes image optimization + PDF generation)
```shell
./build.sh
```
This cleans `_site/`, runs `jekyll build`, halves image sizes via ImageMagick, spins up a local server on port 1843, generates a PDF with Puppeteer (`node generate-pdf.js`), then copies the PDF into `_site/`.

### Image Extraction from PSDs
```shell
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
python mine-psd.py
```
Extracts layers from `canvases/mobile.psd` and `canvases/tablet.psd` into `images/` directories.

### Deployment
Push to `stable-production` branch for GitHub Pages CI/CD. For custom server deployment, run `./deploy.sh` from the parent directory enclosing this repo.

## Architecture

### Device-Variant System
The core architectural pattern: documentation is authored once in `_documentation/` and a custom Jekyll plugin (`_plugins/duplicate_files.rb`) copies it into `_mobile/` and `_tablet/` collections at build time. These temporary directories are auto-cleaned after build. Templates check `page.collection` to render device-specific content.

Three Jekyll collections in `_config.yml`:
- `documentation` — source markdown (output: false)
- `mobile` — auto-generated, output: true
- `tablet` — auto-generated, output: true

### Content Structure
- **Root chapters**: `_documentation/[order]-[title].md` (e.g., `3-quick-guide.md`)
- **Sub-chapters**: `_documentation/chapters/[chapter]-[name]/[subnum]/[order]-[file].md`
- **Front matter**: `layout: chapter`, `title`, `order` (numeric for sorting)

### Custom Plugins (`_plugins/`)
- **duplicate_files.rb** — Device variant generation (hooks `after_reset` and `post_write`)
- **image_shortcode.rb** — `{% flexible_image link="file.jpg" alt="desc" %}` tag that auto-selects tablet images when on tablet pages, wraps in FancyBox gallery

### Layouts (`_layouts/`)
- `base.html` — Root layout (header, footer, FancyBox/jQuery CDN)
- `home.html` — Homepage with TOC and credits
- `chapter.html` — Individual chapter view
- `one-page.html` — All chapters combined for PDF generation

### Search
Client-side full-text search via Lunr.js. `assets/js/search.js` is a Jekyll template that builds the search index from `site.mobile` collection at build time.

### Image Pipeline
PSD files → `mine-psd.py` extracts layers → `images/` → Jekyll copies to `assets/images/` → `half-size-images.zsh` optimizes in `_site/`. The `images/` directory is gitignored (generated content).

### Styling
Minima theme with heavy customization in `_sass/minima/`. Uses Bootstrap 4 grid (`_bootstrap-grid.scss`), Google Fonts "Dosis", dark theme (`#212121` background), and FancyBox 5.0 for image galleries. Print styles in `printable.scss`.
