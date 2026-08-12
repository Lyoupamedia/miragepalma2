# FAQ Section and Structured Data Implementation

Add a frequently asked questions section to the landing page to improve user experience and SEO through rich snippets.

## User Review Required

> [!IMPORTANT]
> The FAQ will be added in three languages (Spanish, English, French). Please review the questions below:
> 1. Do I need an appointment? / ¿Necesito cita previa?
> 2. What are your opening hours? / ¿Cuál es vuestro horario?
> 3. Where are you located? / ¿Dónde estáis ubicados?
> 4. Do you offer services for children? / ¿Ofrecéis servicios para niños?

## Proposed Changes

### Internationalization
- Add `faq` translation category to `src/i18n/translations.ts`.
- Include 4 standard questions and answers in ES, EN, and FR.

### Components
- Create `src/components/FaqSection.tsx` using an accordion-style layout.
- Use `lucide-react` for icons and ensure it matches the existing dark/gold aesthetic.
- Add anchor ID `#faq`.

### Pages
- Integrate `FaqSection` into `src/pages/Index.tsx` between `GallerySection` and `ContactSection`.
- Add `FAQPage` JSON-LD structured data to the `Helmet` component in `Index.tsx`.

### Navigation
- Update `src/components/Navbar.tsx` and `src/components/Footer.tsx` to include the new FAQ link.

## Technical Details

- **Structured Data**: Implementation of `FAQPage` schema to increase visibility in Google's SERPs with rich snippets.
- **Styling**: Tailwind CSS with Framer Motion for smooth accordion transitions.
- **Accessibility**: ARIA labels for accordion triggers and content.
