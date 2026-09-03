---
name: Aura Precision
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5e5e63'
  on-secondary: '#ffffff'
  secondary-container: '#e0dfe4'
  on-secondary-container: '#626267'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1d'
  on-tertiary-container: '#838486'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e3e2e7'
  secondary-fixed-dim: '#c7c6cb'
  on-secondary-fixed: '#1a1b1f'
  on-secondary-fixed-variant: '#46464b'
  tertiary-fixed: '#e2e2e4'
  tertiary-fixed-dim: '#c6c6c8'
  on-tertiary-fixed: '#1a1c1d'
  on-tertiary-fixed-variant: '#454749'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.05'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 19px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 40px
  section-gap: 160px
---

## Brand & Style
The design system is rooted in **Premium Minimalism**, emphasizing clarity, precision, and the physical quality of hardware through digital medium. It targets a high-end audience that values quiet luxury over loud features. 

The visual style leans heavily into the **Apple-inspired aesthetic**, utilizing expansive whitespace (the "breathing room") to elevate content to the status of art. Emotional responses should range from a sense of calm reliability to the excitement of high-technology. Depth is achieved through layering and subtle optical effects rather than decorative elements.

## Colors
The palette is monochromatic and strictly disciplined to ensure the product imagery remains the focal point.

- **Primary (#000000):** Used for primary text, iconography, and high-emphasis CTAs to provide a grounded anchor.
- **Secondary (#86868B):** A refined metallic gray used for secondary labels, captions, and inactive states.
- **Tertiary (#F5F5F7):** The "off-white" background shade used to distinguish interface sections from the pure white page background.
- **Neutral (#FFFFFF):** The base canvas. Pure white is used to maximize light and provide the highest possible contrast for text legibility.

## Typography
This design system utilizes **Inter** for its neutral, systematic, and highly legible characteristics that mimic the "San Francisco" style. 

Key typographic rules:
- **Tight Tracking:** Display sizes use negative letter-spacing to create a "locked-in," professional editorial look.
- **Optical Weighting:** As font size increases, font weight should remain bold or semi-bold, while smaller labels use medium weights to maintain crispness.
- **Hierarchy:** Large gaps in scale between headlines and body text are intentional to create a dramatic, high-end feel.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid Grid**. Content is housed in a 12-column grid with a maximum width of 1200px, centered on the screen. 

- **Generous Whitespace:** Vertical spacing between sections (Section Gaps) is intentionally large (160px) to force the user to focus on one story at a time.
- **Mobile Adaptation:** On mobile, margins reduce to 20px, and the 12-column grid collapses to a single-column flow.
- **The 8px Rule:** All internal padding and margins must be multiples of 8px to ensure mathematical harmony across the UI.

## Elevation & Depth
Depth is communicated through **Glassmorphism** and soft, ambient shadows that mimic natural light falling on high-quality materials.

- **Surface Tiers:** Backgrounds use `#FFFFFF`. Overlays, such as navigation bars, use a backdrop-blur (20px to 30px) with 80% opacity to create a "frosted glass" effect.
- **Ambient Shadows:** Shadows should be ultra-diffused. For a standard card, use a 0px offset, 40px blur, and 4% opacity black. This creates a "lift" rather than a hard drop shadow.
- **Light Borders:** Use a 1px solid border of `#86868B` at 15% opacity to define edges on light surfaces without adding visual clutter.

## Shapes
The shape language is defined by "Squircle" influences. 

- **Primary Radius:** A 0.5rem (8px) radius is the standard for smaller elements like inputs.
- **Container Radius:** Larger cards and modal containers should use `rounded-xl` (1.5rem / 24px) to soften the professional tone and make the technology feel approachable.
- **Buttons:** Use fully rounded pill-shapes for primary actions to distinguish them from structural UI components.

## Components

### Buttons
- **Primary:** Solid `#000000` background with `#FFFFFF` text. Pill-shaped. Subtle scale-down effect (0.98) on click.
- **Secondary:** Transparent background with a 1px `#000000` border.
- **Ghost:** No background, primary color text, used for less frequent actions.

### Cards
- White background, `rounded-xl` corners, and the ambient shadow defined in the Elevation section. No heavy borders. Imagery within cards should have a subtle 1px inner stroke to ensure edge definition against white.

### Inputs
- Background color `#F5F5F7` with no border in the default state. Upon focus, a 1px solid `#000000` border appears. Text should be `body-md`.

### Navigation Bar
- Sticky position at the top of the viewport. Apply `backdrop-filter: blur(20px)` and a bottom border of 1px at 5% opacity black.

### Chips/Tags
- Small, `rounded-lg` elements with `#F5F5F7` background and secondary gray text. Used for categories or technical specifications.