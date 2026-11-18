# Nethsalee Samarawickrama — Portfolio

A complete single-page portfolio using Next.js 16 App Router, React, TypeScript,
Tailwind CSS, and Framer Motion. The latest supplied brief is the content source.
Education is included as requested in that brief.

## Run locally

Use Node.js 20.9 or later.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint
npm run build
npm start
```

The production build fetches Fraunces and DM Sans from Google Fonts through
`next/font/google`. Next.js self-hosts them after the build. An internet connection
is needed for the first build.

## Files

```text
content.ts                        All portfolio copy, navigation and links
app/
  page.tsx                        Sections in the requested order
  layout.tsx                      Fonts, metadata and initial theme
  globals.css                     Dark palette tokens, responsive layouts, motion
components/
  AnimatedName.tsx                Staggered, accessible name reveal
  MotionPanel.tsx                 Reduced-motion-aware tilt and scroll drift
  Atmosphere.tsx                  Reading progress and desktop pointer glow
  SkillsRibbon.tsx                Pausable moving skills ribbon
  Navigation.tsx                  Floating, direction-aware pill and mobile menu
  Hero.tsx                        Name, introduction, CTAs and abstract paper study
  About.tsx                       First-person profile and highlights
  Project.tsx                     Two case studies and contributions
  Skills.tsx                      Technical bento grid and soft skills
  Education.tsx                   Education timeline
  Community.tsx                   Leadership and volunteering
  Certifications.tsx              Certifications and courses
  Contact.tsx                     Front-end form and email copy feedback
  Footer.tsx                      Back-to-top link
  Reveal.tsx                      Reduced-motion-aware Framer Motion reveals
  MagneticLink.tsx                Desktop pointer micro-interaction
  PortfolioLink.tsx               Real links or explicit missing-link placeholders
tailwind.config.ts                Shared colour and font tokens
```

Every listed component contains its complete implementation in this project.

## Editing

Change `content.ts` to update text, skills, projects and contact details. Array
order controls the corresponding cards and timeline entries. Colours live in
the dark-theme CSS variables at the top of `app/globals.css`.

GitHub, LinkedIn and project links are intentionally `null`. They display
“Link to be added” without pretending to be working links. Replace `null`
with a full `https://...` URL to activate a link.

The course entries have no dates or invented credential links. Leadership
activity names are retained from the supplied content. No phone or referee
details are included.


### Adding your images

The latest design includes a large portrait panel and project screenshot frames.
No portrait or screenshots were available in the workspace, so they currently
show decorative monograms instead.

Save your real images in public/images/ and update these fields in content.ts:

- person.portrait with /images/portrait.jpg
- person.portraitAlt with a description of your photo
- projects.items[0].image with /images/educonnect.png
- projects.items[0].imageAlt with a description of that screenshot
- projects.items[1].image with /images/solea.png
- projects.items[1].imageAlt with a description of that screenshot

Local images use Next.js image optimisation. Screenshots retain their aspect
ratio and render inside a browser frame. A portrait fills its panel with a crop,
so choose a photo with space around your face. Change object-position in
.portrait-photo if you want to adjust the crop.

## Form behaviour

The front-end form uses native required/email validation and opens an encoded
email draft. The visitor reviews and sends that draft in their email application.
It does not report a delivered message. If no application opens, visitors can
use the visible email address directly.

## Accessibility and interactions

- Semantic headings, sections, lists, labels, a skip link, and visible focus.
- Fixed dark theme, independent of saved browser or system preferences.
- Navigation shrinks on scroll, tracks sections, slides its active indicator,
  hides when moving down and returns when moving up or receiving keyboard focus.
- Mobile navigation provides a floating menu control and closes on Escape
  or section selection.
- Reduced motion disables scroll smoothing, floating animation, magnetic motion,
  and reveal translation. Touch interaction does not trigger magnetic movement.
- Abstract project art is decorative, not a screenshot or claim about a UI.

## Verification

ESLint and the production build pass. The build includes TypeScript checking.
The browser automation runtime currently fails to start in this environment,
so visual browser and responsive interaction verification remains uncompleted.

## Optional improvements

1. Add genuine project screenshots to the case-study covers.
2. Add a downloadable CV when the final PDF is ready.
3. Add a social preview image for shared portfolio links.
