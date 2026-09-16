# RAONI BURALI — UX / PRODUCT DESIGN PORTFOLIO

## 1. PROJECT CONTEXT

This is the personal portfolio of Raoni Burali, Senior UX / Product Designer.

The project was originally designed and generated using Figma Make and exported as a React application.

The current implementation is an existing, working portfolio.

The existing visual implementation is the SOURCE OF TRUTH.

The primary objective is to maintain and evolve the existing portfolio without unintentionally changing its visual identity, layout, content, responsiveness or interaction patterns.

---

# 2. TECHNOLOGY STACK

Current stack:

- React 19
- React DOM 19
- TypeScript 5.7
- Vite 8
- Tailwind CSS 4
- @tailwindcss/vite
- oxfmt

Do not migrate the project to another framework.

Do not introduce Next.js, Vue, Angular, Astro or another framework.

Do not introduce a new CSS framework.

Do not replace Tailwind CSS unless explicitly requested.

---

# 3. PROJECT STRUCTURE

Important files:

```text
src/
├── main.tsx
├── App.tsx
├── index.css
└── imports/

imports/
├── SVG assets
└── generated/imported visual assets

package.json
vite.config.ts
tsconfig.json
index.html
```

Primary application:

```text
src/App.tsx
```

Global styling:

```text
src/index.css
```

Visual assets:

```text
src/imports/
```

Do not move files unnecessarily.

Do not reorganize the project structure unless explicitly requested.

---

# 4. MAIN COMPONENT ARCHITECTURE

The existing application contains the following main components and sections:

```text
App
│
├── Nav
│
├── HeroSection
│
├── MarqueeSection
│
├── ProjectsSection
│   └── ProjectCard
│
├── AboutSection
│
├── TrustSection
│
├── ExperienceSection
│
├── MetodoSection
│
├── TestimonialsSection
│
├── ContactSection
│
└── Footer
```

Additional reusable elements include:

```text
LogoMark
ManifestoBlock
useReveal
```

Reuse existing components whenever possible.

Do not create duplicate versions of existing components.

---

# 5. PRIMARY RULE — MINIMAL CHANGE

When the user requests a visual adjustment:

MAKE THE SMALLEST POSSIBLE CHANGE.

For example:

If the user asks:

"Increase the spacing between the Hero title and CTA."

Do NOT:

- rewrite HeroSection
- change typography
- change colors
- refactor layout
- modify mobile behavior
- change animation
- change unrelated components

Only modify the spacing necessary to satisfy the request.

---

# 6. NEVER REDESIGN WITHOUT PERMISSION

Do not make unsolicited design decisions.

Do not:

- redesign sections
- modernize components
- change the color palette
- change fonts
- change typography hierarchy
- replace images
- change copy
- alter composition
- add visual effects
- remove visual elements

unless explicitly requested.

If something looks unusual but is part of the existing design, preserve it.

---

# 7. VISUAL SOURCE OF TRUTH

The current implementation is the visual reference.

When making a modification, preserve:

- visual hierarchy
- proportions
- spacing rhythm
- typography
- colors
- imagery
- composition
- animation language
- responsive behavior

When uncertain:

PRESERVE EXISTING BEHAVIOR.

Do not "improve" something simply because a different implementation seems cleaner.

---

# 8. DESIGN TOKENS

Current primary colors include:

```text
Primary Blue
#155DFC

Primary Blue Light
#82A9FF

Cyan Accent
#00E7FF

Dark Green
#03191D

Black
#0A0A0A

Light Background
#EBEBEB

Warm Light Background
#F3F3F1 / approximately equivalent existing usage

Gray
#6A7282

White
#FFFFFF
```

Prefer existing colors already present in the code.

Do not introduce new colors for minor adjustments.

If a new color is genuinely necessary, ask before introducing it.

---

# 9. TYPOGRAPHY

Primary typeface:

Raleway

Weights currently used:

- 300 Light
- 400 Regular
- 500 Medium
- 600 SemiBold
- 700 Bold
- 900 Black

Secondary typeface:

Inter

Use Inter primarily for supporting information, metrics and small functional text when already established by the design.

Do not replace Raleway.

Do not introduce another typeface without explicit instruction.

---

# 10. EXISTING FONT IMPLEMENTATION

Fonts are currently declared in:

```text
src/index.css
```

Existing font-face declarations use the Figma font resources.

Do not remove or replace the existing font-face implementation without explicit instruction.

Preserve:

```text
Raleway:Light
Raleway:Regular
Raleway:Medium
Raleway:SemiBold
Raleway:Bold
Raleway:Black
Inter:Regular
```

---

# 11. HERO

The Hero is one of the most important visual areas of the portfolio.

Component:

```text
HeroSection
```

The Hero currently has separate responsive compositions:

```text
Mobile
Desktop
```

Do not merge them into a single implementation unless explicitly requested.

The Hero contains:

- eyebrow
- Raoni Burali name
- availability badge
- headline
- supporting description
- CTA
- persona imagery
- decorative geometric elements
- floating animations
- entrance animations

Preserve all of these unless the user explicitly requests a change.

---

# 12. HERO ANIMATIONS

Existing Hero animations include:

```text
animate-hero
animate-hero-d1
animate-hero-d2
animate-hero-d3
animate-hero-d4
```

Existing floating animations:

```text
animate-float-a
animate-float-b
animate-float-c
animate-float-d
```

Do not remove or rewrite these animations when making unrelated visual adjustments.

---

# 13. MARQUEE

The portfolio contains a continuously animated marquee.

Existing animation:

```text
marquee
```

Current implementation is in:

```text
src/index.css
```

Do not replace the marquee with a third-party library.

Preserve its continuous movement and visual rhythm.

---

# 14. SCROLL REVEAL

The project uses an IntersectionObserver-based reveal system.

Existing hook:

```text
useReveal()
```

Existing classes:

```text
.reveal
.reveal.in-view
.delay-100
.delay-200
.delay-300
.delay-400
.delay-500
```

Preserve this system.

Do not introduce a third-party animation library just to modify existing reveal behavior.

---

# 15. PROJECTS

Primary component:

```text
ProjectsSection
```

Reusable project component:

```text
ProjectCard
```

The project cards are part of the portfolio's core storytelling.

When modifying a project card:

- preserve image treatment
- preserve typography
- preserve hierarchy
- preserve hover behavior
- preserve responsive behavior

Do not duplicate project-card markup unnecessarily.

---

# 16. ABOUT

Primary component:

```text
AboutSection
```

The About section uses:

- personal positioning
- experience
- strategic statements
- personal imagery
- social links

Preserve the existing narrative and visual hierarchy.

Do not rewrite the copy unless explicitly requested.

---

# 17. RESULTS / TRUST

Primary component:

```text
TrustSection
```

Current section contains portfolio credibility metrics.

Treat these values as CONTENT.

Do not modify numbers unless explicitly requested.

Do not invent metrics.

Do not change claims.

---

# 18. EXPERIENCE

Primary component:

```text
ExperienceSection
```

Experience entries contain professional history and brand/company references.

Preserve:

- ordering
- company names
- visual hierarchy
- logos
- descriptions

Do not invent employment history or modify factual claims.

---

# 19. METHOD

Primary component:

```text
MetodoSection
```

This section represents Raoni's methodology and should retain its conceptual importance.

Preserve its dark visual treatment:

```text
#03191D
```

Do not convert the section to a generic light card layout.

---

# 20. TESTIMONIALS

Primary component:

```text
TestimonialsSection
```

Testimonials are content and must not be invented or rewritten unless explicitly requested.

Preserve attribution and role information.

If duplicate testimonials are discovered, flag them to the user instead of silently inventing replacements.

---

# 21. CONTACT

Primary component:

```text
ContactSection
```

Current primary brand blue:

```text
#155DFC
```

Preserve its strong closing CTA character.

Do not weaken the visual contrast.

---

# 22. NAVIGATION

Primary component:

```text
Nav
```

The navigation currently includes:

```text
Sobre
Projetos
Método
Experiência
Contato
```

and the CTA:

```text
Falar Comigo
```

Desktop and mobile navigation have different behaviors.

Preserve:

- fixed positioning
- scroll state
- mobile drawer
- smooth anchor navigation
- CTA behavior

Do not replace the navigation library unless explicitly requested.

---

# 23. RESPONSIVE DESIGN

The portfolio currently has explicit responsive behavior.

Important breakpoints include:

```text
Mobile
Tablet
Desktop
```

The current Hero specifically uses:

```text
lg:hidden
hidden lg:block
```

Do not change breakpoint strategy casually.

Every responsive change must be checked against:

- mobile
- tablet
- desktop

Never fix desktop by breaking mobile.

Never fix mobile by breaking desktop.

---

# 24. LAYOUT PRINCIPLES

The portfolio uses:

- centered content
- large whitespace
- editorial composition
- grid-based desktop layouts
- responsive stacks
- rounded image containers
- strong typography

Prefer:

- flex
- grid
- Tailwind responsive utilities
- relative positioning

Avoid unnecessary absolute positioning.

However, preserve existing absolute positioning when it is intentionally used for decorative elements or composition.

---

# 25. IMAGES AND ASSETS

Existing assets are part of the original portfolio design.

Important asset groups include:

```text
Persona
Hero
About
Uniasselvi
Unicesumar
Sicredi
Hiplatform
Portobello
Banco do Brasil
Project images
Social icons
Logos
SVG graphics
```

Never replace assets with generated placeholders.

Never rename or move assets unless necessary.

Never distort images.

Preserve aspect ratio.

---

# 26. EXTERNAL ASSETS

The project currently loads Raleway and Inter from Figma's font resources.

Do not replace external resources with arbitrary alternatives.

If an external resource fails, report it before replacing it.

---

# 27. DEPENDENCIES

Current runtime dependencies are intentionally minimal:

```text
react
react-dom
```

Development dependencies include:

```text
typescript
vite
@vitejs/plugin-react
tailwindcss
@tailwindcss/vite
oxfmt
```

Do not install a new dependency for a problem that can be solved with the existing stack.

Before adding a dependency, explain:

1. why it is necessary;
2. why the existing stack cannot solve it;
3. what maintenance cost it introduces.

---

# 28. NO UNNECESSARY REFACTORING

Do not refactor working code simply because another architecture looks cleaner.

This is especially important for:

```text
src/App.tsx
src/index.css
```

Large rewrites increase the risk of visual regressions.

Prefer incremental refactoring only when explicitly requested.

---

# 29. CODE STYLE

Follow the existing code style.

Use:

- TypeScript
- React functional components
- existing Tailwind conventions

Preserve existing imports and aliases.

The project uses:

```text
@
```

as the source alias.

---

# 30. BEFORE EVERY EDIT

Before editing:

1. Locate the relevant component.
2. Locate the relevant CSS or Tailwind classes.
3. Understand the existing behavior.
4. Identify desktop/mobile implications.
5. Make the smallest change possible.

Do not edit blindly.

---

# 31. AFTER EVERY EDIT

After modifying the code:

Run:

```bash
npm run build
```

If appropriate, also run:

```bash
npm run dev
```

Check:

- compilation
- console errors
- affected component
- desktop
- mobile
- animations
- navigation
- images

Do not consider the task complete if the build is broken.

---

# 32. VISUAL QA

When a visual modification is requested:

Compare BEFORE and AFTER.

Check:

```text
Desktop
Tablet
Mobile
```

Check the modified area and neighboring sections.

The objective is not merely:

"the code compiles."

The objective is:

"the requested visual change works without regressions."

---

# 33. USER REQUESTS SHOULD BE TREATED LITERALLY

If the user says:

"Increase the Hero spacing."

Do not interpret this as:

"Redesign the Hero."

If the user says:

"Change the button."

Do not change all buttons.

If the user says:

"Fix mobile."

Do not redesign mobile.

Ask for clarification only when the requested change cannot reasonably be inferred.

---

# 34. DO NOT INVENT CONTENT

Never invent:

- clients
- projects
- metrics
- testimonials
- professional experiences
- awards
- results
- URLs
- social profiles

If content is missing, flag it.

---

# 35. ACCESSIBILITY

Preserve and improve accessibility when it does not alter the visual design.

Maintain:

- semantic HTML
- alt text
- aria-labels
- keyboard navigation
- focus states
- sufficient contrast

Do not remove accessibility attributes.

---

# 36. PERFORMANCE

Prefer the existing lightweight implementation.

Avoid:

- unnecessary JavaScript
- unnecessary libraries
- excessive animation
- duplicated assets
- large dependencies

Images should remain appropriately optimized when possible without reducing their visual quality.

---

# 37. VERSION CONTROL

Treat meaningful modifications as atomic changes.

Recommended workflow:

```text
original
   ↓
small change
   ↓
test
   ↓
commit
   ↓
next change
```

Do not combine unrelated visual changes into one modification.

---

# 38. IMPORTANT — Figma Make ORIGIN

This project originated from Figma Make.

The objective of this repository is NOT to reproduce Figma Make.

The objective is to CONTINUE and EVOLVE the existing implementation.

Do not assume the project needs to be rebuilt.

Do not convert it to another platform.

Do not migrate it to Framer.

Do not recreate it from screenshots.

Work directly on the existing React implementation.

---

# 39. DESIGNER-FIRST WORKFLOW

The owner of this project is a Senior UX / Product Designer.

Therefore, when receiving a visual request:

Think in terms of:

- hierarchy
- spacing
- composition
- typography
- interaction
- responsiveness
- design consistency

But implement the smallest technical change necessary.

Do not impose developer preferences over established design decisions.

---

# 40. GOLDEN RULE

PRESERVE FIRST.

UNDERSTAND SECOND.

MODIFY THIRD.

VALIDATE LAST.

The existing portfolio is valuable work.

Every modification must protect what already works.