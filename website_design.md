# ✦ Website Clone Specification### Portfolio of VatsalaJha — Visual Design100% cloned from reference screenshots of dtf.com (DinTaiFung)*Route covered: Main / Landing page only*

---

##0. Global Design Language (Cloned from Reference)

###0.1 Brand & Art-Direction Overview• Elegant, editorial feel that pairs high-contrast serif display headings with clean sans-serif body text.• Canvas-like, warm off-white background dominates; content blocks “float” with generous negative space.• Sparse, minimalist composition broken by powerful hero video, oversized typographic statements, and vivid red CTAs.• Subtle dotted textures / line rules used as separators.• Overall mood: refined, confident, modern; now re-messaged for a cutting-edge developer portfolio.

###0.2 Color Palette (Exact Clone)

| Token name | HEX | Usage | Notes |
|------------|-----|-------|-------|
| Canvas-Beige | #EFEBDD | Global page background |
| Jet-Black | #000000 | Primary text, navbar links |
| Charcoal-60 | #222222 | Body copy / muted text |
| Accent-Red | #D40A0A | CTA buttons, small accent icons, link arrows |
| Soft-Gray | #F7F5EE | Card backgrounds / hover overlays |
| Pure-White | #FFFFFF | Form fields, inner card fill |

*Do not introduce new hues; follow exact proportion as reference (≈85% beige,10% black/charcoal,5% red).*

###0.3 Typography Scale (Exact Clone)

| Level | Clone Font | Weight | Size (desktop) | Style notes |
|-------|------------|--------|----------------|-------------|
| H1 Hero | High-contrast modern serif (e.g., “Portrait” or “Libre Baskerville”) |400 |5.0rem | Italicised emphasis word (`by`, `for`, etc.) in slightly lighter weight |
| H2 Section heading | Same serif |400 |2.75rem | Sentence-case |
| H3 Card title | Sans-serif grotesk (e.g., “Inter”, “Helvetica Neue”) |600 |1.25rem | All caps tracking +5 |
| Body L | Sans-serif |400 |1.125rem |160% line height |
| Body S | Sans-serif |400 |0.95rem |150% line height |
| Nav | Sans-serif |500 |0.8125rem | Letter-spacing0.05em |

Mobile scale: reduce each tier by ~25%.

###0.4 Spacing & Layout Grid (Exact Clone)

• Fluid12-col grid; max-width1440px; core content bound to1140px.• Gutters32px (desktop),16px (tablet),12px (mobile).• Top / bottom section padding:112px desktop,80px tablet,56px mobile.• Cards use fixed24px internal padding,40px lateral gap.

###0.5 Visual Effects & Treatments• Primary buttons: pill shape,44px height, full-radius (22px), accent-red fill, white text, subtle inner shadow on press.• Secondary buttons: transparent fill,1px solid #D4D0C2 border, arrow icon right aligned.• Images: Slight2px soft shadow (#0000001a) +4px corner radius.• Section intro word (e.g., italic) set in `font-style: italic`, letter-spacing normal.• Hover on nav links: underline appears from left (200ms ease).• Fade-in on scroll for section blocks (20% upward translate,400ms).

###0.6 Component Styles1. Sticky top nav (beige background,1px bottom rule).2. Full-viewport hero with autoplay muted loop video + text overlay left.3. Section heading block (serif left, dotted texture background right).4. Responsive card grid (3-col →2-col →1-col).5. Split-two-column info row (text vs. illustration).6. Wide newsletter / contact form bar with right-aligned mascot illustration.---

##1. Project SummaryCreate VatsalaJha’s personal tech portfolio. Purpose: showcase her background, projects, and ways to connect, while visually mirroring dtf.com’s refined style. Tone: professional, innovative, approachable.

---

##2. Main Page Overview (`/`)

Reference visual order retained; only the copy/content changes.

1. Sticky Navbar2. Hero (video + headline)3. About Section4. Education Section5. Experience Section6. Projects Section (card grid)7. Skills Strip (wide bar with progress / chip list)8. Community Involvement Section (two-column)9. Contact / Connect Form (newsletter-style)10. Footer (small © line; mimic reference simplicity)

---

##3. Section-by-Section Specifications###3.1 Top Navigation1. Visual Clone • Height64px, beige bg,1px #D6D3C8 bottom border. • Left: Monogram logotype (replace reference Chinese logotype). • Center: five inline links. • Right: two pill buttons (`Résumé` & `HireMe`).

2. Content Replacement • Logo text: “Vatsala Jha” in same serif stacked with small sans “PORTFOLIO”. • Nav links (keep same count): About| Projects| Skills| Community| Contact. • CTA buttons: “Résumé ↓” (download) in ghost style; “HireMe →” in red.

3. Layout clone: identical alignment and spacing.

4. Components: logo, link list,2 buttons.

5. Assets: None (simple text logo).

6. Interactions: hover underline on links; buttons scale0.98 on press.

---

###3.2 Hero — “Shaped by Tradition” clone1. Visual Clone • Full viewport video background, darker20% overlay for contrast. • Left-aligned oversized serif headline; each line break identical to reference. • Sub-caption in small caps sans under headline.2. Content Replacement • Original: “SHAPED by TRADITION, CRAFTED by HAND” • NEW: Line1: “CODED by” (italic “by”) Line2: “PASSION,” Line3: “CRAFTED for” (italic “for”) Line4: “IMPACT” • Sub-caption: “Building performant products & delightful UX”3. Layout: maintain same60% left width text block.

4. Components: video background, text overlay.

5. Asset Replacement • Hero video prompt: “Cinematic slow-motion close-up of computer code scrolling across a black terminal reflected on developer’s glasses, warm ambient studio lighting,4K, shallow depth of field.” • Same16:9 crop as reference.

6. Interaction: Parallax slow zoom on scroll identical to reference.

---

###3.3 About Section (clones “The DinTaiFung Way” block)

1. Visual Clone • Two-column grid on beige. Left: serif heading; right: paragraph list.

2. Content • Heading: “The VatsalaJha Story” • Body list bullets (bold titles + description) – Curious Engineer: “Self-taught since age12…” – Front-End Specialist: “React, TypeScript, Next.js…” – Performance Advocate: “Lighthouse95+ scores…” – Lifelong Learner: “Currently exploring Rust…”3. Layout & space identical.

4. Components: heading, bullet list.

5. Assets: none.

6. Interaction: Accordion collapse (bullet group opens/close) copies reference arrow icon.

---

###3.4 Education Section (clone “Appetizers” grid)

1. Visual Clone • Section heading left top. Three cards in row with diamond-rotated image on beige card.

2. Content Replacement • Cards:1. “Bachelor of Technology” – “Indian Institute of Information Technology, GPA8.9/10,2018-2022.”2. “Exchange Semester” – “Technical University of Munich, Focus: Human-Computer Interaction.”3. “Certifications” – “AWSSolutions Architect, Google UX Design.” • “LEARN MORE →” link changed to “DETAILS →” on each card.

3. Assets • Card1 image prompt: “Minimal line illustration of university building front view, flat beige background.” • Card2: “Modern European campus scene illustration, matching first style.” • Card3: “Stack of certification documents illustration, matching style.” • All cropped square, rotated diamond.

---

###3.5 Experience Section (clone “From the Wok” grid)

1. Visual Clone identical to previous grid section.

2. Content • Heading: “Industry Experience” • Three cards: a. “Software Engineer – Microsoft” description lines. b. “Front-End Intern – GitHub” description. c. “Open-Source Maintainer – ChakraUI” description.3. Assets • Use company logo round-dish style images: – Prompt: “Microsoft logo rendered on circular ceramic plate top-view, Behance style photography.” (brownish plate to mimic rice dishes). – Same for GitHub & ChakraUI.---

###3.6 Projects Section (clone Locations map hero)

1. Visual Clone • Oversized serif headline “EXPLORE our LOCATIONS” becomes horizontally large “EXPLORE my PROJECTS”. • Right side map dots replaced by abstract dotted background of constellation of nodes symbolizing code repo graph.

2. Content • Sidebar list (left) becomes project filter tags: “FULLSTACK (3)”, “FRONTEND (4)”, “OSS (2)”, etc. • Selecting tag (no functional requirement for static page) visually highlights like red dumpling icon.

3. Assets • Background dotted graphic prompt: “Halftone network diagram of interconnected nodes forming abstract globe, beige on lighter beige.”---

###3.7 Skills Strip (clone “Sign Up for BaoBao Insiders” form)

1. Visual Clone • Full-width pale bar, left serif heading and description, right chip list & progress bars.

2. Content • Heading: “Core Skillset” • Description: “A snapshot of languages & tools I use daily.” • Form fields swapped with pill chips each120px wide; sample chips: “TypeScript”, “React”, “Next.js”, “Node”, “GraphQL”, “AWS”. • Red pill button remains: label now “VIEW FULL STACK →”.

3. Assets • Replace dumpling mascot with playful SVG of a laptop smiling (prompt: “Cute minimalist line art of smiling laptop character, single-stroke style, #C8BBA4 outline”). Size and position identical.

---

###3.8 Community Section (clone three-image mosaic)

1. Visual Clone •3-image collage (left square, center arch, right rounded-rect). Same ratios.

2. Content • Images representing speaking, mentoring, hackathons. • Prompts:1. “Female developer giving conference talk on stage, audience blurred, warm lighting.”2. “Close-up of hands mentoring junior coder pair-programming, over-the-shoulder.”3. “Team celebrating hackathon win raising trophy, energetic.”3. No copy overlay; purely visual like reference.

---

###3.9 Contact Section (clone Locations list rows)

1. Visual Clone • List rows with light dividing lines; rightmost contains buttons.

2. Content • Rows: – “Email” description: vatsala@hey.com – red button “SENDEMAIL”. – “LinkedIn” description: linkedin.com/in/vatsalajha – ghost arrow button “CONNECT”. – “GitHub” description: github.com/vatsalajha – ghost arrow button “FOLLOW”.3. Buttons mimic reserve/order styling.

---

###3.10 Footer (simple)

*Clone reference narrow beige footer with center-aligned small sans text.*Copy: “©2024 VatsalaJha. Built with love & accessible design.”

---

## Clone Fidelity Checklist✓ All typography, colors, spacing, shadows, radii, grid, and animation specs match reference exactly.✓ Every textual element replaced with new portfolio-appropriate copy of equal visual length.✓ All imagery/video replaced with new prompts but retain identical dimensions, placement, and treatment.✓ Component hierarchy and interactions (hover, focus, scroll animations) cloned1:1.✓ Main page only; no additional code or pages generated here.