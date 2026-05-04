# SUVRAT GLOBAL - Professional Website

A complete, fully-functional, responsive multi-page website for SUVRAT GLOBAL with services in IT Solutions, Road Construction, and Print & Scanning.

## 📋 Project Overview

This website is built with **HTML5**, **CSS3**, and **vanilla JavaScript** - no external dependencies required. It features a modern, professional design with smooth animations and full mobile responsiveness.

### Company Services
- **IT Services**: Web Development, Mobile Apps, Cloud Solutions, Cybersecurity
- **Road Construction**: Highway Projects, Urban Roads, Infrastructure Development
- **Print & Scanning**: Document Printing, Photo Printing, Digitization Services

## 📁 Project Structure

```
suvrat-global/
├── index.html           # Home page
├── about.html           # About company, team, timeline
├── services.html        # Detailed service offerings
├── portfolio.html       # Project gallery with case studies
├── blog.html            # Blog articles with search & filter
├── contact.html         # Contact form, FAQ, map
├── css/
│   └── style.css        # Complete stylesheet (2000+ lines)
└── js/
    └── main.js          # JavaScript functionality
```

## 🎨 Key Features

### ✨ Design Features
- ✅ Modern, clean, professional UI/UX
- ✅ White background with blue/orange accent colors
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Sticky navigation with hamburger menu
- ✅ Smooth scroll animations
- ✅ Gradient backgrounds and shadows
- ✅ Card-based layouts with hover effects
- ✅ Google Fonts integration (Poppins & Playfair Display)

### 🔧 Functionality
- ✅ Sticky navbar with active link highlighting
- ✅ Mobile hamburger menu with smooth toggle
- ✅ Portfolio filtering by category (IT, Construction, Print)
- ✅ Blog with search and category filtering
- ✅ Contact form with validation
- ✅ FAQ accordion with expand/collapse
- ✅ Form message notifications
- ✅ Scroll animations on elements

### 📱 Pages Included

#### 1. **index.html** - Home Page
- Hero section with CTA buttons
- 4 highlight cards
- Featured services grid (6 services)
- Client testimonials section
- Call-to-action section
- Footer with links and social media

#### 2. **about.html** - About Page
- Company story and journey
- Mission & Vision statements
- 4 Core values cards
- 6-member team section
- 6-milestone timeline
- Statistics (500+ projects, 200+ clients, etc.)

#### 3. **services.html** - Services Page
- IT Services (6 detailed service cards)
- Road Construction (6 detailed service cards)
- Print & Scanning (6 detailed service cards)
- 4-step process explanation
- Pricing plans (Starter, Professional, Enterprise)
- Detailed service features and benefits

#### 4. **portfolio.html** - Portfolio Page
- Portfolio filtering (All, IT, Construction, Print)
- 18-item project gallery
- 6 featured case studies with:
  - Project challenges
  - Solutions implemented
  - Results achieved

#### 5. **blog.html** - Blog Page
- Search functionality
- Category filtering (Technology, Infrastructure, Business, Tips)
- 15 blog articles with:
  - Category tags
  - Read time estimation
  - Publication dates
- Newsletter signup section

#### 6. **contact.html** - Contact Page
- Contact information cards
- Working contact form with validation
- Map placeholder
- Social media links
- 8-item FAQ accordion with expandable answers

## 🎯 Color Scheme

```css
Primary Color: #1e40af (Blue)
Secondary Color: #0f172a (Dark Navy)
Accent Color: #f97316 (Orange)
Light Background: #f8fafc
Text Dark: #1e293b
Text Light: #64748b
```

## 📦 Getting Started

### 1. Extract the ZIP File
```bash
unzip suvrat-global.zip
cd suvrat-global
```

### 2. Open in Browser
Simply open `index.html` in any modern web browser:
- Double-click `index.html`
- Or right-click and select "Open with" → Choose your browser
- Or drag-and-drop the file to your browser window

### 3. For Local Server (Optional)
If you want to test with a local server:

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (http-server):**
```bash
npx http-server
```

Then visit: `http://localhost:8000`

## 🚀 Deployment

### Option 1: Static Hosting (Recommended)
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect GitHub or upload files
- **GitHub Pages**: Push to repository
- **Firebase Hosting**: Use Firebase CLI

### Option 2: Traditional Web Hosting
1. Upload all files to your hosting account
2. Set `index.html` as the default page
3. Ensure file structure is maintained

### Option 3: Docker
```dockerfile
FROM nginx:latest
COPY . /usr/share/nginx/html
```

## 🎨 Customization

### Change Colors
Edit `/css/style.css` and update the CSS variables:
```css
:root {
    --primary-color: #1e40af;      /* Change primary color */
    --accent-color: #f97316;       /* Change accent color */
    --secondary-color: #0f172a;    /* Change secondary color */
}
```

### Update Company Information
- Edit phone numbers in `contact.html`
- Update email addresses in `footer` sections
- Modify location details in `contact-info` section
- Update social media links throughout

### Change Content
- All HTML files contain meaningful, editable content
- Replace team member names and roles in `about.html`
- Update service descriptions in `services.html`
- Modify blog articles in `blog.html`

### Modify Images
- Replace emoji icons with actual images
- Update portfolio item backgrounds
- Add real photos for team members

## 📱 Responsive Breakpoints

```css
Mobile: 480px and below
Tablet: 768px and below
Desktop: 1200px and above
```

## 🔐 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ✅ Features Checklist

- [x] 6 HTML pages (index, about, services, portfolio, blog, contact)
- [x] Shared CSS file (2000+ lines)
- [x] Shared JavaScript file with interactive features
- [x] Fully responsive design
- [x] Sticky navigation with hamburger menu
- [x] Portfolio filtering by category
- [x] Blog search and category filtering
- [x] Contact form with validation
- [x] FAQ accordion
- [x] Smooth animations and transitions
- [x] Modern color scheme
- [x] Professional typography
- [x] Semantic HTML5
- [x] Mobile-first approach
- [x] No external dependencies

## 📊 Performance

- ⚡ Lightweight (no frameworks or libraries)
- ⚡ Fast loading (optimized CSS and JS)
- ⚡ Mobile-friendly
- ⚡ SEO-friendly semantic HTML

## 🆘 Troubleshooting

### Navigation not working
- Ensure all HTML files are in the same directory
- Check that file extensions are `.html`

### Styles not loading
- Verify `css/style.css` exists in the `css` folder
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)

### JavaScript not working
- Check browser console for errors (F12)
- Ensure `js/main.js` is in the `js` folder
- Try opening in a different browser

### Responsive design issues
- Clear browser cache
- Test on actual device or browser DevTools
- Check viewport meta tag is present in `<head>`

## 📝 License & Usage

This website template is free to use and modify for SUVRAT GLOBAL. 

## 🎓 Learning Resources

- HTML: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS: https://developer.mozilla.org/en-US/docs/Web/CSS
- JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript

## 💬 Support

For questions or issues with the website, contact:
- Email: info@suvratglobal.com
- Phone: +91 9876543210

## 🎉 Thank You

Thank you for using this professional website template. We hope it helps SUVRAT GLOBAL succeed online!

---

**Last Updated**: May 2026
**Created by**: JAI JAIN
