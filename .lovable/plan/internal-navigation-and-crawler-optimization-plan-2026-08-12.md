# Internal Navigation and Crawler Optimization Plan

Improve local SEO and user experience by adding internal navigation links and semantic anchor structures for search engine crawlers.

## User Review Required

> [!IMPORTANT]
> This update adds a "Quick Links" section to the footer and ensures all page sections have proper IDs and ARIA labels for better accessibility and search indexing.

## Proposed Changes

### Navigation & UX
- Add internal links to the Footer (Home, Services, About, Gallery, Contact).
- Ensure smooth scroll behavior across the single-page landing.

### SEO & Semantic HTML
- Verify `id` attributes on all main sections (`#inicio`, `#servicios`, `#nosotros`, `#galeria`, `#contacto`).
- Add `aria-label` to sections for accessibility.
- Add a hidden "Skip to content" link for screen readers.

### Components

#### Footer
- Add a "Quick Links" column to the footer layout.

#### Navbar
- Add a "Skip to content" link.

## Technical Details

- Single-page anchor links implementation.
- ARIA landmarks for sections.
- CSS `scroll-behavior: smooth` check (already likely in `index.css` but will verify).
