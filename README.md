# Veritas Supermarket — Landing Page

**Live demo → [veritas-super.netlify.app](https://veritas-super.netlify.app/)**

> ### ⚠️ This is a personal test project
>
> **This is not an official website, and it is not affiliated with, endorsed by, or commissioned by any real business.**
>
> I built it on my own time as a practice exercise to work on front-end layout, responsive design and CSS. The shop name, products, prices, deals, customer reviews and contact details on the page are **placeholder content used for design purposes only** — none of it should be treated as real or accurate. Nothing here is a live storefront: there is no checkout, no backend, and no data is collected or sent anywhere.
>
> If you own the business referenced here and would like the content changed or the repository taken down, please open an issue and I'll remove it.

---

## What this is

A single-page marketing site for a fictional neighbourhood supermarket, built to practise the anatomy of a small-business landing page — the kind that has to sell a physical shop rather than a product you can buy online.

The design goal was to make it feel like a real local store rather than a generic template: warm cream and forest-green palette, a "we're open right now" indicator, prices in naira, and a call button that follows you down the page, since a corner shop's main conversion is a phone call or a walk-in, not an online order.

## Built with

Plain HTML, CSS and JavaScript. No frameworks, no build step, no dependencies — the whole thing is three files you can open in a browser.

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and all content |
| `styles.css` | Full stylesheet — design tokens, layout, responsive rules |
| `script.js` | Mobile nav, scroll reveal, and two small UI interactions |

## Page sections

- **Hero** — open-now badge, headline, and a floating "today's deal" card
- **Departments** — six category tiles (produce, bakery, meat & fish, drinks, household, snacks)
- **Featured products** — product grid with prices, discount badges and an add-to-cart button
- **Weekly deals** — bundle offers panel
- **Why Veritas** — six selling-point cards
- **Reviews** — three testimonial cards *(written for the mockup, not real customers)*
- **Location** — address, phone, hours and an embedded map
- **Newsletter + footer**

## Things I was practising

- **Design tokens in CSS custom properties** — colours, fonts and border shades are all declared once in `:root`, so the palette can be retuned from a single block.
- **A layout that survives a phone.** The grids collapse at breakpoints, the desktop nav swaps for a hamburger drawer, and the sticky call-to-action stays reachable with a thumb.
- **Scroll reveal without a library.** An `IntersectionObserver` adds an `.on` class to any `.rv` element as it enters the viewport, then unobserves it so it only animates once.
- **Interactions that acknowledge the click.** The add-to-cart button flips to a checkmark and back; the newsletter field does a lightweight email check and confirms in place. Both are front-end only.

## Running it

The deployed version is at **[veritas-super.netlify.app](https://veritas-super.netlify.app/)** if you just want to look at it.

To run it locally, no install is needed — clone the repo and open `index.html` in a browser.

```bash
git clone https://github.com/hknixks/veritas.git
cd veritas
start index.html
```

Or serve it locally if you prefer:

```bash
python -m http.server 8000
```

## Known gaps

Since this is a practice build, a few things are deliberately unfinished:

- The cart button is a visual effect only — there's no cart, no state, no checkout.
- The newsletter form doesn't submit anywhere; the email is validated loosely in the browser and discarded.
- Product photography is stand-in imagery from Unsplash plus emoji placeholders.

## Licence

Shared for reference and learning. The placeholder business details in the content are not mine to license — see the notice at the top.
