---
name: TNPS
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#464554'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#5b598c'
  on-secondary: '#ffffff'
  secondary-container: '#c7c3fe'
  on-secondary-container: '#514f81'
  tertiary: '#006c49'
  on-tertiary: '#ffffff'
  tertiary-container: '#00885d'
  on-tertiary-container: '#000703'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#e3dfff'
  secondary-fixed-dim: '#c4c1fb'
  on-secondary-fixed: '#181445'
  on-secondary-fixed-variant: '#444173'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-margin: 1rem
  stack-gap: 1rem
  section-gap: 1.5rem
  touch-target: 2.75rem
  card-padding: 1.25rem
---

## Brand & Style

The design system prioritizes security, efficiency, and clarity for institutional campus management. The brand personality is professional and reliable, utilizing a **Corporate / Modern** aesthetic with a strong emphasis on **Minimalism** to ensure zero friction during time-sensitive gate crossings. 

The visual mood is established through a deep indigo foundation that evokes authority, contrasted with vibrant purple accents that guide user action. On mobile, the interface transitions to a **Card-Based** architecture, utilizing heavy whitespace and distinct surface containers to organize complex institutional data into digestible, thumb-friendly modules.

**Key Principles:**
- **Clarity over Decoration:** Every element serves a functional purpose in the pass-request or verification workflow.
- **Institutional Trust:** A clean, structured layout that mirrors the organized nature of campus security.
- **Efficiency:** Minimal taps to reach core actions like "Request Pass" or "View QR Code."

## Colors

This design system utilizes a high-contrast palette optimized for legibility in various lighting conditions (e.g., outdoor security checkpoints). 

- **Primary (Purple):** Used for primary actions, active navigation states, and key interactive elements.
- **Secondary (Dark Indigo):** Derived from the sidebar in the reference, this is used for headers, text hierarchy, and institutional branding elements.
- **Tertiary (Success Green):** Used for "Active" pass statuses and "In-Campus" indicators.
- **Neutral:** A range of cool grays and off-whites (Slate/Gray scale) to define card surfaces and background depth without creating visual fatigue.
- **Status Colors:** Explicit red and amber for denied requests or pending approvals.

## Typography

The typography system uses **Plus Jakarta Sans** for headings to provide a friendly yet modern professional feel, and **Inter** for all functional/body text to ensure maximum legibility at small sizes.

- **High Contrast:** All body text must maintain a minimum 4.5:1 contrast ratio against card backgrounds.
- **Scale:** On mobile, headings are slightly reduced in size to prevent awkward line breaks while maintaining a clear hierarchy.
- **Labels:** Use `label-lg` for form titles and data headers to provide a clear distinction from the user's input data.

## Layout & Spacing

This design system follows a **Mobile-First Fluid Grid** that transitions to a **Fixed Max-Width (1200px)** on desktop.

- **Mobile (Default):** Single column layout. 16px (`1rem`) side margins. Vertical stacking for all dashboard widgets.
- **Tablet (768px+):** 2-column grid for dashboard cards (e.g., Stats in 2x2 grid).
- **Desktop (1024px+):** 12-column grid. Side navigation remains fixed at 280px as seen in the reference.
- **Spacing Rhythm:** Based on an 8px (0.5rem) base unit. All interactive elements must adhere to the `touch-target` of 44px (2.75rem) to ensure accessibility for users on the move.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Shadows** to create a clean, tactile feel.

- **Level 0 (Background):** Neutral light gray (`#F8FAFC`).
- **Level 1 (Cards):** Pure white surfaces with a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.05)). This is the primary container for pass details and forms.
- **Level 2 (Interactive/Floating):** Primary buttons and active states use a more pronounced shadow with a slight indigo tint to suggest "pressability."
- **Outlines:** Used exclusively for input fields and secondary buttons (1px solid border) to maintain a clean, professional look without over-relying on shadows.

## Shapes

The shape language is **Rounded**, striking a balance between approachable modern design and institutional structure.

- **Standard Radius:** 8px (0.5rem) for cards, inputs, and primary buttons.
- **Large Radius:** 16px (1rem) for large dashboard containers.
- **Status Pills:** Fully rounded (pill-shaped) for status indicators like "Active," "Pending," or "Expired."
- **Icons:** Enclosed in rounded-square containers (8px) with a 10% opacity background of their respective colors (e.g., green icon on light green background).

## Components

### Buttons
- **Primary:** Solid purple background (`primary_color_hex`) with white text. Height: 48px for mobile.
- **Secondary:** White background with indigo border and text.
- **Icon Buttons:** Circular or rounded-square (8px) with a 44px touch target.

### Cards
- **Dashboard Stats:** Each card contains an icon in the top right, a label (`label-lg`), a large value (`headline-md`), and a sub-label (`label-md`).
- **Pass Record:** A horizontal card format for mobile, showing the pass type icon, date, and status pill.

### Input Fields
- **Style:** 1px border (`#E2E8F0`), 8px border-radius, background `#FFFFFF`.
- **States:** Focus state uses a 2px purple border.
- **Labels:** Positioned above the input field using `label-lg`.

### Status Indicators
- **Pills:** High-contrast text on a light background (e.g., Dark Green text on 10% Green background) for "In-Campus" or "Approved."

### Lists
- **Standard List:** Clean separators (1px `#F1F5F9`) between items with 16px vertical padding to ensure easy thumb-tapping.