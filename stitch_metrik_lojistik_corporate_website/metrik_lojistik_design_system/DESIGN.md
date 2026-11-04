---
name: Metrik Lojistik Design System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#44474c'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#525f75'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0e1c2f'
  on-primary-container: '#77849c'
  inverse-primary: '#bac7e1'
  secondary: '#a73a00'
  on-secondary: '#ffffff'
  secondary-container: '#fd651e'
  on-secondary-container: '#571a00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#00164e'
  on-tertiary-container: '#6780d3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3fe'
  primary-fixed-dim: '#bac7e1'
  on-primary-fixed: '#0e1c2f'
  on-primary-fixed-variant: '#3a475c'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb599'
  on-secondary-fixed: '#370e00'
  on-secondary-fixed-variant: '#7f2b00'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#b6c4ff'
  on-tertiary-fixed: '#00164e'
  on-tertiary-fixed-variant: '#264191'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  metric-display:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
This design system embodies corporate authority, technological precision, and operational resilience tailored for enterprise-scale B2B freight, supply chain orchestration, and multimodal logistics. Drawing inspiration from modern Swiss grid discipline integrated with precision engineering aesthetics, it eschews frivolous decoration in favor of high-legibility typographic hierarchies, expansive architectural whitespace, and clear operational data density.

The aesthetic fuses modern corporate minimalism with industrial clarity. Deep navy foundations deliver institutional gravitas and security, offset by luminous neutral surfaces and focused industrial amber accents that direct operational attention without causing sensory fatigue. The emotional response is one of absolute reliability, computational rigor, and frictionless logistical control.

## Colors
The color architecture relies on high-contrast semantic hierarchies engineered for complex data environments, tracking maps, and executive reporting:

- **Primary (`#0B192C` - Deep Enterprise Navy):** Serves as the foundational anchor for structural navigation, high-level headers, primary surfaces in inverted modes, and authoritative elements. Communicates operational scale and institutional stability.
- **Secondary (`#EA580C` - Industrial Safety Amber):** The strategic accent reserved for actionable states, primary conversions, active waypoints, delivery exceptions, and mission-critical tracking alerts. Used deliberately to create instant visual anchors against neutral backdrops.
- **Tertiary (`#1E3A8A` - Technical Cobalt):** Applied to secondary interactive markers, filtered states, informational badges, and telemetry graphs.
- **Neutrals & Surfaces:**
  - Base Background: `#F8FAFC` (Slate 50) for reduced eye strain across prolonged monitoring sessions.
  - Surface Containers: `#FFFFFF` (Pure White) with subtle `#F1F5F9` (Slate 100) surface fills for nested modules and table headers.
  - Borders & Dividers: `#E2E8F0` (Slate 200) for razor-sharp, low-contrast structural boundaries.
  - Typography Base: `#0F172A` (Slate 900) for primary headings; `#334155` (Slate 700) for body text; `#64748B` (Slate 500) for metadata and column labels.
- **Functional Semantics:**
  - Success/On-Schedule: `#059669` (Emerald 600)
  - Warning/Customs Delay: `#D97706` (Amber 600)
  - Critical/Route Interruption: `#DC2626` (Red 600)

## Typography
Typographic rules prioritize scanning speed and numerical clarity across tracking tables, dispatch schedules, and analytical charts.

- **Primary Family (Plus Jakarta Sans):** Chosen for its contemporary corporate presence, geometric legibility, and refined European letterforms. Used across brand headers, cards, titles, and dense narrative content.
- **Functional Label & Numerical Family (Inter):** Integrated specifically for micro-labels, technical telemetry tags, tracking code displays, and tabular datasets (`font-feature-settings: 'tnum' on, 'cv02' on, 'cv03' on, 'cv04' on`). This ensures alignment consistency across financial values, weights, container IDs, and estimated arrival counters.
- **Letter Spacing:** Tighter letter spacing on display headlines conveys technological cohesion, while micro-labels utilize positive tracking (+0.05em) and uppercase transformation for instant readability in field conditions.

## Layout & Spacing
The layout model employs a 12-column responsive fluid grid anchored by strict 8pt base spatial intervals:

- **Desktop (1280px+):** 12-column grid with `margin: 2.5rem` (40px) and `gutter: 1.5rem` (24px). Content spans logical operational modules: sidebar telemetry spans 3 columns, live map/manifest tracking spans 6 columns, and contextual load details span 3 columns.
- **Tablet (768px - 1279px):** 8-column layout with `margin: 1.5rem` (24px) and `gutter: 1rem` (16px). Tertiary inspectors collapse into expandable sliding drawers.
- **Mobile (< 768px):** 4-column layout with `margin-mobile: 1rem` (16px) and `gutter-mobile: 1rem` (16px). Tabular views reflow into stacked priority status cards.
- **Density Rhythms:**
  - High-density monitoring (waybill tables, telemetry feeds): rely on `space-xs` (4px) and `space-sm` (8px) internal paddings.
  - Standard enterprise interactions (quote forms, profile setups): leverage `space-md` (16px) and `space-lg` (24px).
  - Structural separation between major portal modules: leverages `space-xl` (40px).

## Elevation & Depth
Depth is articulated via structured surface layering combined with ambient, diffused drop-shadows tinted slightly with deep navy (`#0B192C`), preventing the muddy appearance of default neutral shadows.

- **Level 0 (Canvas Base):** Flat `#F8FAFC`, zero shadow. Houses broad section wrappers and baseline dashboard surfaces.
- **Level 1 (Card & Module Surface):** Background `#FFFFFF`, border `1px solid #E2E8F0`, shadow `0 1px 3px 0 rgba(11, 25, 44, 0.04), 0 1px 2px -1px rgba(11, 25, 44, 0.02)`. Standard state for manifest lists, metric modules, and freight order panels.
- **Level 2 (Hover & Active Interactive Cards):** Shadow `0 10px 15px -3px rgba(11, 25, 44, 0.06), 0 4px 6px -4px rgba(11, 25, 44, 0.03)`, border transition to `#CBD5E1`. Applied on active shipment tracking cards and clickable analytical summaries.
- **Level 3 (Flyouts, Popovers & Context Menus):** Shadow `0 20px 25px -5px rgba(11, 25, 44, 0.08), 0 8px 10px -6px rgba(11, 25, 44, 0.04)`, border `1px solid #E2E8F0`. Used for customs status breakdowns and route detail tooltips.
- **Level 4 (Modals & Critical Dispatch Overlays):** Shadow `0 25px 50px -12px rgba(11, 25, 44, 0.22)`, accompanied by a high-opacity backdrop overlay (`rgba(11, 25, 44, 0.5)` with `backdrop-filter: blur(4px)`).

## Shapes
A conservative, structural roundedness level (`roundedness: 1` / soft corners) establishes an architectural, technical tone.

- **Micro Components (Badges, Checkboxes, Micro-inputs):** `rounded` (4px / 0.25rem) ensures precision and maintains visual alignment with sharp tabular cell boundaries.
- **Interactive Form Elements & Primary Buttons:** `rounded` (6px - 8px / 0.375rem - 0.5rem) provides tactile accessibility while avoiding playful soft aesthetics.
- **Standard Structural Modules (Cards, Modals, Summary Containers):** `rounded-lg` (8px / 0.5rem) paired with exact 1px structural borders.
- **Exceptions:** Pills are strictly reserved for live status indicators (e.g., `In Transit`, `Customs Cleared`) where a continuous curved radius signals an encapsulated semantic state.

## Components

### Buttons
- **Primary:** Background `#EA580C`, text `#FFFFFF`, font-weight 600. Hover state `#C2410C`, active state `#9A3412`. Focused with a 2px offset ring of `#EA580C`. Reserved for primary actions (e.g., "Create Shipment", "Approve Customs", "Submit Quotation").
- **Secondary (Corporate Brand):** Background `#0B192C`, text `#FFFFFF`, hover `#1E293B`. Used for major portal transitions and dispatch approvals.
- **Outline / Quiet:** Background `#FFFFFF`, border `1px solid #E2E8F0`, text `#334155`, hover background `#F8FAFC` and text `#0F172A`. Applied to document downloads and filter controls.

### Cards & Modules
- Built on `#FFFFFF` surfaces with `1px solid #E2E8F0` borders and Level 1 elevation.
- Standard padding is 20px (`space-lg`), with card headers featuring an integrated bottom border (`#F1F5F9`) separating high-level route metadata from operational line items.

### Status Chips & Badges
- Compact height (24px), font size 11px uppercase Inter with tabular figures.
- Semantic configurations:
  - **In Transit / Active:** Background `#FFF7ED`, text `#C2410C`, border `1px solid #FFEDD5` (with a pulsing 6px `#EA580C` dot indicator).
  - **Delivered / Completed:** Background `#ECFDF5`, text `#047857`, border `1px solid #D1FAE5`.
  - **Exception / Alert:** Background `#FEF2F2`, text `#B91C1C`, border `1px solid #FEE2E2`.
  - **Customs Hold:** Background `#FFFBEB`, text `#B45309`, border `1px solid #FEF3C7`.

### Input Fields & Controls
- Height 42px. Neutral background `#FFFFFF`, border `1px solid #CBD5E1`, text `#0F172A`, placeholder `#94A3B8`.
- Focus state triggers border `#0B192C` with a 3px ring of `rgba(11, 25, 44, 0.08)`.
- Numeric inputs (e.g., gross weight, TEU capacity, declared freight value) default to monospace tabular figures (`Inter`).

### Data Tables & Manifest Lists
- Header cells: height 36px, background `#F8FAFC`, uppercase label typography, bottom border `1px solid #E2E8F0`.
- Row height: 48px standard, alternating hover states via `#F8FAFC` with instant visual transition (100ms ease-out).
- Pinned right column for quick operational triggers (e.g., "View CMR", "Track Vehicle", "Download BOL").

### Logistics-Specific Components
- **Waypoint Route Timeline:** Vertical or horizontal stepped progress track featuring solid 2px links (`#E2E8F0` inactive, `#0B192C` completed, `#EA580C` current transit hub). Hub nodes feature nested geometric circles with vehicle icon badges.
- **Fleet Telemetry Pill:** Embedded status widget displaying temperature, battery, or seal tamper detection data with instantaneous color shifts for compliance violations.