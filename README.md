# 🌳 Family Heritage Website

A complete 4-generation family website, ready to deploy on Netlify for free.

---

## 📁 Site Structure

```
family-site/
├── index.html                  ← Home page
├── great-grandparents.html     ← Generation 1
├── grandparents.html           ← Generation 2
├── family-tree.html            ← GEDCOM import & tree viewer
├── gallery.html                ← Photo gallery
├── timeline.html               ← Family history timeline
├── contribute.html             ← Photo/story submission form
├── generation-3/
│   ├── child-1.html            ← Child 1 family (copy for 2–8)
│   ├── child-2.html
│   ├── ... (child-3 to child-8)
│   └── spinster.html           ← Single child profile
├── generation-4/
│   ├── index.html              ← All grandchildren overview
│   ├── grandchild-1.html       ← Married grandchild (copy for 2–8)
│   ├── ... (grandchild-2 to grandchild-8)
│   ├── single-1.html           ← Single grandchild (copy for 2–4)
│   └── ... (single-2 to single-4)
├── css/
│   └── style.css               ← All styling
├── js/
│   └── main.js                 ← Nav, footer, lightbox, tabs
├── images/                     ← Put your family photos here
└── netlify.toml                ← Netlify configuration
```

---

## 🚀 Deploying to Netlify (Step-by-Step)

### Option A — Drag & Drop (Easiest, no GitHub needed)
1. Go to [netlify.com](https://netlify.com) and log in
2. From your dashboard, find the box that says **"Drag and drop your site folder here"**
3. Drag the entire `family-site` folder onto that box
4. Your site goes live instantly at a URL like `https://amazing-family-abc123.netlify.app`
5. To rename it: Site settings → Site details → Change site name

### Option B — GitHub (Recommended for easy updates)
1. Go to [github.com](https://github.com) and create a new repository called `family-site`
2. Upload all files from this folder to that repository (use the "Add file" button)
3. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
4. Connect GitHub, select your `family-site` repository
5. Click **Deploy site** — it's live!
6. **Future updates:** Edit files on GitHub → changes deploy automatically within 30 seconds

### Custom Domain (Optional)
- In Netlify: Site settings → Domain management → Add custom domain
- Free domains available at [freenom.com](https://freenom.com) (.tk, .ml, .ga)
- Cheap `.family` or `.co.uk` domains from [Namecheap](https://namecheap.com) (~£10/yr)

---

## ✏️ How to Customise

### Adding Real Names
Search for `[Square bracket text]` across all HTML files — these are your placeholders.
Replace them with real family names, dates and places.

Useful tool: In VS Code, press `Ctrl+Shift+H` (Find & Replace across all files).

### Adding Real Photos
1. Put your photo files in the `/images/` folder
2. Name them clearly: `great-grandparents-wedding.jpg`, `john-smith-portrait.jpg`
3. In the relevant HTML file, find the `gallery-item` divs
4. Change `data-src=""` to `data-src="images/your-photo.jpg"`
5. Replace the `<div class="gallery-placeholder">` with `<img src="images/your-photo.jpg" alt="Description">`
6. Recommended size: 1200×900px, under 500KB (use [squoosh.app](https://squoosh.app) to compress)

### Renaming Child Pages
The generation-3 and generation-4 pages are named generically (child-1, child-2, etc.).
You can rename them to use real surnames if you prefer:
- Rename `child-1.html` → `smith-family.html`
- Update the link in `grandparents.html` and `index.html` to match

### Adding More Children to a Page
In any generation page, find the `children-grid` div and copy a `child-card` block:
```html
<a href="../generation-4/grandchild-X.html" class="child-card">
  <div class="child-avatar">👤</div>
  <div class="child-info"><strong>[Child Name]</strong><br><small>Born [Year]</small></div>
</a>
```

---

## 📬 Receiving Photo Contributions (Netlify Forms)

The Contribute page uses Netlify Forms — zero setup required.

1. Once deployed, go to Netlify dashboard → **Forms**
2. Find **family-contributions**
3. Click any submission to see the details and download uploaded photos
4. To get email notifications: Forms → Notifications → Add email notification → enter your email

**Free tier:** 100 form submissions/month (more than enough for a family site)

---

## 🌳 Using the GEDCOM Family Tree

1. Export a GEDCOM file from your genealogy app:
   - **Ancestry:** Tree Settings → Export Tree → Download GEDCOM
   - **MyHeritage:** Family Tree → Manage → Export to GEDCOM
   - **FamilySearch:** Family Tree → Person → Tools → Export GEDCOM
   - **Gramps:** File → Export → GEDCOM
2. Go to your site's **Family Tree** page
3. Click "Choose .ged File" and select your exported file
4. The tree parses and displays instantly — all in your browser, nothing uploaded

---

## 🎨 Changing Colours

Open `css/style.css` and edit the `:root` variables at the top:

```css
:root {
  --cream:       #FAF7F2;   /* Page background */
  --walnut:      #5C3D2E;   /* Primary dark colour */
  --sage:        #7A9E7E;   /* Green accent */
  --gold:        #C9A84C;   /* Gold accent */
}
```

---

## 📞 Need Help?

The site is built with plain HTML, CSS and JavaScript — no frameworks, no build tools.
Any web developer can help you customise it, or you can edit it directly in any text editor.

Recommended free editors: [VS Code](https://code.visualstudio.com) · [Notepad++](https://notepad-plus-plus.org)
