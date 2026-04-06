# TREVA Website  Complete Production Documentation

## Project Overview

| Field | Value |
|-------|-------|
| **Project Name** | Treva Digital Agency Website |
| **Framework** | Next.js 14 (React) |
| **Styling** | Tailwind CSS v3 |
| **Animations** | Framer Motion v11 |
| **Forms** | React Hook Form v7 |
| **Icons** | Lucide React |
| **Font** | Montserrat (Google Fonts) |
| **Primary Brand Color** | `#29C8D5` (Teal) |
| **Target Market** | Bengaluru, India (with global reach) |

---

## 1. Tech Stack

### Frontend
- **Next.js 14**  SSR/SSG for SEO and performance
- **React 18**  Component model
- **Tailwind CSS 3**  Utility-first responsive styling
- **Framer Motion 11**  Page transitions and scroll animations
- **React Hook Form 7**  Form validation and submission
- **Lucide React**  Consistent icon system

### Recommended Backend (To Integrate)
- **Formspree / EmailJS**  Contact form email delivery (no backend required)
- **Node.js + Express**  Custom backend if needed for lead capture
- **Vercel**  Recommended deployment platform (free tier supports Next.js perfectly)

---

## 2. Design System

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary-teal` | `#29C8D5` | CTAs, active states, accents |
| `--teal-dark` | `#1AA8B4` | Hover states |
| `--teal-light` | `#5DD8E2` | Gradient highlights |
| `--bg-black` | `#000000` | Deepest backgrounds |
| `--bg-dark-1` | `#080C10` | Section backgrounds |
| `--bg-dark-2` | `#0D1117` | Card backgrounds |
| `--text-white` | `#FFFFFF` | Headings & body |
| `--text-grey` | `#8A9AB0` | Subtext & captions |
| `--border-subtle` | `rgba(41,200,213,0.12)` | Default card borders |
| `--border-active` | `rgba(41,200,213,0.4)` | Hover card borders |

### Typography
- **Font Family:** Montserrat (Google Fonts)
- **H1/H2 (Hero):** Weight 900, letter-spacing -0.03em
- **Section Headings:** Weight 800, letter-spacing -0.02em
- **Card Titles:** Weight 700
- **Body Text:** Weight 400–500, line-height 1.6–1.7
- **Buttons/Labels:** Weight 600–700, uppercase, letter-spacing 0.05em

### Spacing Scale
Uses Tailwind defaults with custom sections:
- Section padding: `py-20` to `py-24` (80px–96px)
- Card padding: `p-6` to `p-10`
- Grid gap: `gap-6` standard

---

## 3. File Structure

```
treva-website/
├── pages/
│   ├── _app.jsx              ← App wrapper, global layout
│   ├── index.jsx             ← Home page
│   ├── about.jsx             ← About page
│   ├── services.jsx          ← Services page
│   ├── work.jsx              ← Portfolio / Case Studies
│   ├── contact.jsx           ← Contact page
│   ├── blog/
│   │   ├── index.jsx         ← Blog listing
│   │   └── [slug].jsx        ← Dynamic blog detail
│   └── products/
│       ├── index.jsx         ← Products overview
│       ├── treva-os.jsx      ← Treva OS product page
│       ├── treva-agent.jsx   ← Treva Agent product page
│       ├── make-my-cake.jsx  ← Make My Cake product page
│       └── treva-eams.jsx    ← Treva EAMS product page
├── components/
│   ├── Navbar.jsx            ← Sticky responsive navbar
│   ├── Footer.jsx            ← Full footer with newsletter
│   └── SEOHead.jsx           ← Dynamic SEO meta tags
├── styles/
│   └── globals.css           ← Global styles, CSS variables
├── public/
│   └── (add favicon.ico, og-image.jpg, apple-touch-icon.png)
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

---

## 4. Page-by-Page Summary

### `/`  Home (index.jsx)
**Sections:**
1. Hero  Particle canvas, animated headline, stat cards
2. Client Marquee  Auto-scrolling logo ticker (19+ brands)
3. Services Grid  6 service cards with hover effects
4. Why Choose Treva  Split layout with metrics + USP points
5. Our Work Preview  3 case study cards
6. Treva Workflow  6-step process cards
7. Products Preview  3 product teaser cards
8. Testimonials  4 testimonial cards with star ratings
9. CTA Banner  "Book a Free Call" section

**SEO:** Full title, description, OG tags, LocalBusiness JSON-LD schema

---

### `/about`  About
**Sections:**
1. Hero  Brand story + 4 stat cards
2. Mission & Vision  Side-by-side cards
3. Core Values  3 value cards
4. Team  4 team member cards + note about full team
5. CTA  Book a call

---

### `/services`  Services
**Sections:**
1. Hero
2. Custom Solution Banner  Sticky top bar
3. All 6 Services (expanded cards with features list + pricing)
4. Process Steps  4-step delivery process
5. CTA  Book free strategy call

**Services Covered:**
- Branding (₹60,000)
- Media Production (₹60,000)
- Social Media Marketing (₹60,000/month)
- Performance Marketing (₹60,000 + Ad Spend)
- Web Development (₹80,000+)
- App Development (₹80,000+)

---

### `/work`  Portfolio
**Features:**
- Filter tabs by category (All, Performance, Branding, Social, Web, Media)
- 6 full case study cards with image areas, metrics, tags
- Filterable with Framer Motion AnimatePresence
- Sticky filter bar

**Case Studies:**
- Amazon (Performance Marketing)
- Zolo (Branding)
- Edureka (Web Development)
- TBC (Social Media)
- Toyota (Performance Marketing)
- District 6 (Media Production)

---

### `/blog`  Blog Listing
**Features:**
- Featured post (large card with visual)
- 4 additional post cards
- Tag-based color coding
- Read time display
- Links to individual blog detail pages

---

### `/blog/[slug]`  Blog Detail
**Features:**
- Dynamic routing with `getStaticPaths` + `getStaticProps`
- Back button, meta info, author card
- Visual header area
- Full article content with sections
- In-article CTA
- Related posts section

**Available Slugs:**
- `seo-to-geo-search-strategy-2026`
- `agentic-ai-autonomous-marketing-teams`
- `privacy-first-personalization-paradox`
- `surviving-zero-click-apocalypse`
- `conversational-everything-next-website-dialogue`

---

### `/contact`  Contact
**Features:**
- Contact info cards (Email, Phone, Address, Hours)
- WhatsApp button (wa.me link)
- Google Maps embed (HSR Layout, Bengaluru)
- Full contact form with React Hook Form validation
- Fields: First Name, Last Name, Email, Phone, Company, Service, Message
- Success state after submission

**To Integrate:**
Replace the `onSubmit` function in `contact.jsx` with your preferred email service:

```javascript
// Option A: Formspree
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: { 'Content-Type': 'application/json' },
});

// Option B: EmailJS
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', data, 'PUBLIC_KEY');
```

---

### `/products`  Products Overview
**Features:**
- 4 product cards in expanded layout
- Each product has unique color theming
- Waitlist CTA button linking to individual pages

---

### `/products/treva-os`
**Color:** Teal (#29C8D5)
**Features:** 6 feature cards + mock dashboard UI + waitlist form

### `/products/treva-agent`
**Color:** Purple (#7C3AED)
**Features:** 6 capability cards + live activity log mock + waitlist form

### `/products/make-my-cake`
**Color:** Amber (#F59E0B)
**Features:** 6 feature cards + baker listing mock + dual CTA (customer/baker) + waitlist form

### `/products/treva-eams`
**Color:** Green (#10B981)
**Features:** 6 feature cards + analytics dashboard mock + waitlist form

---

## 5. Key Components

### `Navbar.jsx`
- Sticky with scroll blur effect
- Active link highlighting with underline animation
- Mobile hamburger with full-screen overlay menu
- "Book a Call" CTA button

### `Footer.jsx`
- Brand info + newsletter signup
- Contact details (Email, Phone, Address)
- 3-column link grid (Services, Pages, Products)
- Social icons (Instagram, LinkedIn, Twitter, Facebook)
- Copyright bar

### `SEOHead.jsx`
- Dynamic title, description, OG tags
- Twitter card meta
- Canonical URL
- LocalBusiness JSON-LD schema (HSR Layout, Bengaluru)
- Favicon links

---

## 6. SEO Implementation

### On-Page SEO
Every page has:
- Unique `<title>` tag
- Unique `<meta name="description">`
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags
- Canonical URL

### Technical SEO
- `next.config.js` security headers
- `getStaticProps` / `getStaticPaths` for blog pages (SSG)
- Semantic HTML (h1, h2, article, nav, footer, section)
- Alt text fields ready for all images
- Mobile-first responsive design
- Fast load (Next.js image optimization, lazy loading)

### Local SEO
- JSON-LD `LocalBusiness` schema on every page
- Address: HSR Layout, Bengaluru, Karnataka 560102
- GeoCoordinates included
- Business hours included

---

## 7. Performance Checklist

- [ ] Replace all placeholder images with real WebP images
- [ ] Add `alt` text to all `<img>` tags
- [ ] Connect contact form to Formspree/EmailJS
- [ ] Add Google Analytics 4 tracking code to `_app.jsx`
- [ ] Add real client logos (PNG/SVG) to `/public/logos/`
- [ ] Add team photos to About page
- [ ] Add `favicon.ico` and `og-image.jpg` to `/public/`
- [ ] Update contact email and phone in `Footer.jsx` and `contact.jsx`
- [ ] Update WhatsApp number in `contact.jsx`
- [ ] Add Instagram feed widget to homepage (optional)
- [ ] Set up Vercel deployment
- [ ] Configure custom domain `treva.in`

---

## 8. Deployment

### Recommended: Vercel (Free)
```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project
cd treva-website

# Install dependencies
npm install

# Deploy
vercel
```

### Environment Variables (set in Vercel dashboard)
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

### Alternative: Netlify
```bash
npm run build
# Upload the `out/` folder to Netlify
# Note: For Netlify, add `output: 'export'` to next.config.js
```

---

## 9. How to Add New Blog Posts

1. Open `pages/blog/index.jsx`
2. Add a new object to the `blogPosts` array:
```javascript
{
  slug: 'your-blog-slug',
  tag: 'Category',
  title: 'Your Blog Title',
  excerpt: 'Short description...',
  readTime: '5 min read',
  date: 'Mar 10, 2026',
  featured: false,
}
```
3. Open `pages/blog/[slug].jsx`
4. Add your full content to the `blogContent` object using the same slug as key

---

## 10. How to Add New Case Studies

Open `pages/work.jsx` and add to the `works` array:
```javascript
{
  client: 'Client Name',
  category: 'Service Category',
  title: 'Case Study Title',
  desc: 'Description of the project...',
  metrics: [
    { icon: TrendingUp, label: 'Metric Name', value: '100%' },
  ],
  tags: ['Tag1', 'Tag2'],
  duration: '3 Months',
}
```

---

## 11. Brand Clients (All 19+)

**Tier 1  Enterprise & Global:**
Amazon, Toyota, Zolo, Edureka

**Tier 2  Hospitality & Nightlife:**
TBC (The Bier Club), District 6, The Watering Hole, Deck of Brews, Balcony Bar, Brother Barley, 2gether, Z-manda, Chifa, 153 Beer Street, HOOT, Frenzy, Back Street

**Tier 3  Lifestyle & Wellness:**
N-Saloon, Nailashes, Almarooj, La Glaze

---

## 12. Contact Information (Update These)
- **Email:** hello@treva.in
- **Phone:** +91 70229 22526 ← Replace with real number
- **Address:** HSR Layout, Bengaluru, Karnataka 560102
- **WhatsApp:** https://wa.me/919876543210 ← Replace with real number

---

*Documentation prepared for Treva Digital Agency  March 2026*
*Built with Next.js 14 + Tailwind CSS + Framer Motion*
