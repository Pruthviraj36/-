# SPMS — Accessibility Audit Checklist

Use this checklist to verify WCAG AA alignment and general accessibility.

## 1. Keyboard & focus

- [ ] All interactive elements (links, buttons, custom controls) are reachable via Tab.
- [ ] Focus order follows a logical sequence (e.g. sidebar → topbar → main).
- [ ] Focus is visible: 2px outline using `:focus-visible` (e.g. `--color-accent`).
- [ ] Modals and drawers trap focus; Escape closes them.
- [ ] No keyboard traps; focus returns to trigger when a modal closes.

## 2. Forms & controls

- [ ] Every form field has a visible `<label>` associated via `htmlFor`/`id`.
- [ ] Errors are announced: `aria-invalid`, `aria-describedby` pointing to error text, `role="alert"` where appropriate.
- [ ] Required fields are marked (`required` and/or `aria-required`).
- [ ] Custom select, file upload, and date/time inputs are keyboard operable (Enter to activate, Arrow keys where applicable).
- [ ] Placeholder text is not the only label.

## 3. Color & contrast

- [ ] Text/background contrast meets WCAG AA (≥ 4.5:1 for normal text, ≥ 3:1 for large).
- [ ] Information is not conveyed by color alone (e.g. status also has text or icon).
- [ ] Focus indicators have sufficient contrast against the background.
- [ ] Check in high-contrast / reduced-motion scenarios if possible.

## 4. Motion & animation

- [ ] `prefers-reduced-motion: reduce` is respected: animations/transitions are disabled or greatly reduced.
- [ ] No auto-playing motion that cannot be paused; no flashing content (≥ 3 flashes per second).

## 5. Structure & semantics

- [ ] One logical `<h1>` per page; headings follow a logical order (h1 → h2 → h3).
- [ ] Landmarks: `<main>`, `<nav>`, `<header>`, `<aside>` used where appropriate.
- [ ] Lists use `<ul>`/`<ol>`/`<li>` (or `role="list"` if list-style is removed for design).
- [ ] Tables have `<th>`, `scope` where helpful, and a short caption or `aria-label` where needed.
- [ ] Buttons vs links: buttons for actions, links for navigation; `aria-current="page"` on current nav item.

## 6. Icons & images

- [ ] Decorative icons use `aria-hidden="true"` or are wrapped in elements that hide them from assistive tech.
- [ ] Meaningful icons have `aria-label` or visible text.
- [ ] SVG icons are inlined or referenced in a way that allows `currentColor` and respect `prefers-reduced-motion` for any animation.

## 7. Notifications (toasts)

- [ ] Toasts use `role="alert"` or `role="status"` as appropriate.
- [ ] Auto-dismiss is not the only way to dismiss; a visible dismiss control is present.
- [ ] Consider pausing auto-dismiss on hover/focus (as per UI requirements).

## 8. Responsive & zoom

- [ ] Layout works at 200% zoom without horizontal scrolling for main content.
- [ ] Touch targets are at least 44×44 px where practical.
- [ ] On small viewports, tables become a card list; no two-dimensional scrolling for critical content.

## 9. Screen reader

- [ ] Page title (`<title>`) and main heading describe the page.
- [ ] Skip link or similar to jump to `#main-content` when applicable.
- [ ] Live regions (`aria-live`) used sparingly for dynamic updates (e.g. toasts, in-app notifications).
- [ ] Form submission and errors are announced (via `role="alert"` or live region).

## 10. Testing tools & steps

- [ ] Run axe DevTools (or similar) on Login, Dashboard, Groups, Meetings, Reports, Settings.
- [ ] Test with NVDA/JAWS (Windows) or VoiceOver (macOS) for critical flows: Login, open group, create meeting, export report.
- [ ] Test keyboard-only: Login, navigate sidebar, open/close modal, submit form, export Excel/PDF.
- [ ] Verify color contrast with a contrast checker (e.g. WebAIM, Contrast Checker) for text, buttons, and focus rings.

---

*This checklist aligns with the SPMS UI requirements (WCAG AA, ARIA, semantic HTML) and should be re-run after major UI or dependency changes.*
