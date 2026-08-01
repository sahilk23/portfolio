# Sahil Khairnar — Portfolio

A single-page, self-contained portfolio site positioned for **AI/ML Engineer** roles.
No build step, no dependencies, no frameworks. Open `index.html` in any browser and it works.

---

## ⚠️ Do this first (1 minute)

**Drop your résumé PDF into `assets/` and name it exactly:**

```
assets/Sahil-Khairnar-Resume.pdf
```

The "Download résumé" buttons point there. Until the file exists, those buttons 404.
(I couldn't copy the PDF across automatically — macOS didn't grant shell access to the Desktop.)

---

## How it's structured (and why)

Recruiters spend ~30 seconds on a first pass. The page is ordered to survive that scan:

| Section | What a recruiter gets in the first 10 seconds |
|---|---|
| **Hero** | Role title, availability badge, one-line value prop, résumé + contact buttons above the fold |
| **Metrics strip** | Four hard numbers (94%, 15k, 30%, 40–60%) — proof before prose |
| **About** | The "what I do / what I want" paragraph + a scannable facts panel (stack, location, notice period) |
| **Experience** | Timeline, outcome-first bullets, tech chips per role |
| **Projects** | Impact bullets with numbers, GitHub links, tech chips |
| **Skills** | Grouped by capability, not an undifferentiated word cloud |
| **Education** | Degree, institution, graduation year |
| **Contact** | Email / phone / LinkedIn / résumé, plus a low-friction ask |

Design decisions made deliberately for recruiter use:

- **Contact details are visible on load** — no scrolling, no contact form.
- **Every claim is a number from your résumé.** Nothing invented.
- **Prints cleanly** — Cmd+P gives a readable light-theme document if anyone prints or PDFs it.
- **Mobile-first responsive** — a large share of recruiters open links on a phone.
- **Loads instantly offline** — everything inline except the Google Font, which degrades to system fonts.

---

## Before you share it — checklist

- [ ] Add `assets/Sahil-Khairnar-Resume.pdf` (see above)
- [ ] Verify the email in the page is correct: `sahilk2303@gmail.com` (search-replace if not)
- [ ] Fill the two italic `→` placeholders in the **EHR Clinical Chatbot** and **MedicoreAI** project cards — those are the only two spots with thin content, because they're GitHub repos I couldn't read details from
- [ ] Confirm the availability badge is accurate ("available immediately")
- [ ] Optional: add a headshot in the hero, and screenshots/GIFs to project cards — visual proof lifts response rates
- [ ] Optional: add certifications or coursework if you have any worth listing

---

## Publish it (free, ~5 minutes)

### Option A — GitHub Pages (recommended: gives you `sahilk23.github.io`)

```bash
cd ~/Desktop/my-portfolio
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/sahilk23/sahilk23.github.io.git
git push -u origin main
```

Create the repo `sahilk23.github.io` on GitHub first (public). Pages turns on automatically for
that repo name; the site goes live at **https://sahilk23.github.io** within a minute or two.

If you'd rather use a different repo name, push there instead and enable
*Settings → Pages → Source: main branch → / (root)*. URL becomes `sahilk23.github.io/<repo-name>`.

### Option B — Netlify Drop (fastest, no git)

Go to <https://app.netlify.com/drop> and drag the `my-portfolio` folder onto the page.
You get a live URL in seconds; rename it to something like `sahil-khairnar.netlify.app` in site settings.

### Option C — Send as a file

Zip the folder and attach it, or export to PDF (Cmd+P → Save as PDF) for ATS uploads.
The web version is stronger — send the link where you can.

---

## Where to put the link

- LinkedIn → **Contact info → Website** (label it "Portfolio")
- LinkedIn → top of your **About** section
- Résumé header, next to your GitHub link
- Email signature and every job application's "portfolio/website" field

---

## Editing

Everything lives in `index.html`. The colour system is at the top in `:root` — change
`--accent`, `--accent-2`, `--accent-3` and the whole site re-themes. Sections are marked with
`<!-- ============ SECTION ============ -->` comments.

```
my-portfolio/
├── index.html    ← the entire site
├── README.md     ← this file
└── assets/
    └── Sahil-Khairnar-Resume.pdf   ← add this
```
