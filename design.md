# TechService — Design System

## Brand
TechService — serviço técnico especializado para embarcações e yachts. Manutenção preventiva, corretiva, motores, rabetas, assistência náutica completa. Público: proprietários de embarcações/yachts, marinas, parceiros, investidores.

Tone: profissional e técnico — preciso, especialista, confiável. Estilo visual: **dark luxury** — clube náutico de alto padrão, navy profundo/preto com acentos dourados, inspirado na logo fornecida.

## Colors
- `--bg-primary: #05070d` (near-black navy, base background)
- `--bg-secondary: #0b1220` (panels, cards)
- `--bg-tertiary: #121b2e` (elevated cards, nav on scroll)
- `--navy: #0e1b33` (deep navy accent blocks)
- `--gold: #c9a24b` (primary accent, CTAs, borders)
- `--gold-light: #e8cd82` (hover/highlight)
- `--gold-dim: #8a7136` (muted gold, dividers)
- `--text-primary: #f4f1e8` (off-white warm)
- `--text-secondary: #a8b0bf` (muted body text)
- `--text-tertiary: #6b7280` (captions, meta)
- `--border: rgba(201,162,75,0.18)` (hairline gold borders)
- `--success: #4caf7d` (status ok)

## Typography
- Display / headings: **Cormorant** (serif, elegant, high-end yacht-club feel) — weights 500/600.
- Body / UI: **Poppins** — weights 400/500/600.
- Large hero numerals/labels: Cormorant italic for accent words.
- Generous line-height (1.6 body), tight tracking on large display type, wide letter-spacing on small caps labels/eyebrows (uppercase, +0.15em).

## Layout & Spacing
- Max content width: 1280px, generous side padding (px-6 md:px-12 lg:px-24).
- Section vertical rhythm: py-24 md:py-32.
- Asymmetric grids for services/features (not uniform 3-col cookie cutter) — mix of large feature card + smaller stacked cards.
- Thin 1px gold hairline dividers instead of heavy borders/shadows.
- Corners: mostly sharp/minimal radius (rounded-sm / rounded-md max) — avoid overly rounded "app" look, keep it premium/architectural.

## Backgrounds & Texture
- Deep navy/black base with subtle radial gold glow gradients behind hero and section transitions.
- Fine noise/grain overlay for texture (low opacity).
- Nautical line-art motifs (compass, wave lines, topographic contour lines) as faint background decoration, gold at low opacity.
- Full-bleed yacht/engine-room photography with dark gradient overlays (scrim) for text legibility.

## Motion
- Staggered fade+rise reveal on scroll for section content (Motion library).
- Subtle parallax on hero background image.
- Gold underline/border draw-in on hover for nav links and buttons.
- Smooth page transitions kept minimal — performance first.

## Components
- **Navbar**: fixed, transparent over hero → solid `--bg-tertiary` with blur on scroll. Logo left, nav links center/right, language switcher (PT/EN/ES) + "Solicitar Orçamento" gold CTA button right.
- **Buttons**: primary = solid gold bg, navy text, sharp corners, uppercase small tracked label. Secondary = transparent with gold 1px border, gold text, fills on hover.
- **Service cards**: dark panel bg-secondary, thin gold top border, icon (lucide-react) in gold circle outline, serif title, body text, "Saber mais →" link.
- **Stat blocks**: large serif gold numerals + small caps label underneath, used in About/trust section.
- **Testimonial/partner logos**: grayscale logos that gain gold tint on hover.
- **Footer**: navy-black, multi-column (company, services, contact, social), gold hairline top border, logo + tagline.

## Imagery
- Yacht exteriors at marina, engine/mechanical close-ups, technician at work, aerial marina shots. Moody, high-contrast, warm gold highlights against dark water/night tones.

## Languages
Site fully localized: **PT-BR (default), EN, ES** via a lightweight i18n context + dictionary — language switcher persists choice in localStorage.

## Pages
1. **Home** — hero, value props, service catalog preview, stats/trust, CTA.
2. **Serviços** — full service catalog as product-style cards (Manutenção Preventiva, Corretiva, Reparo de Motor, Reparos em Rabetas, Manutenção Geral, Assistência Náutica Especializada), each with description + "Solicitar orçamento" CTA.
3. **Sobre** — company story, mission, expertise, credentials/certifications, team/technical capability.
4. **Frota Atendida / Parceiros** — types of vessels serviced, marina/partner logos, testimonials.
5. **Contato** — contact form, WhatsApp/phone, address/marina location, map placeholder.
