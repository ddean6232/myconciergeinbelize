# My Concierge in Belize

A modern, responsive website for elite travel, expat, and lifestyle services in Belize.

## Project Structure

```
myconciergeinbelize/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── main.js             # JavaScript functionality
└── assets/             # Images and media files
    └── hero-bg.jpg     # Hero background image
```

## Local Development

Simply open `index.html` in your browser or use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Deployment to Cloudflare Pages

### Option 1: Deploy via Git (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/ddean6232/myconciergeinbelize.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Pages** → **Create a project**
   - Click **Connect to Git**
   - Select your repository (`myconciergeinbelize`)
   - Configure build settings:
     - **Framework preset**: None
     - **Build command**: (leave completely empty - do NOT use `npx wrangler deploy`)
     - **Build output directory**: `/` (root directory)
     - **Root directory**: `/` (default)
   - Click **Save and Deploy**
   - Cloudflare Pages will automatically detect and serve your static files

3. **Custom Domain (Optional)**
   - In your Pages project, go to **Custom domains**
   - Add your domain
   - Update DNS records as instructed

**Important:** This is a static site. Do not use Wrangler for deployment - Cloudflare Pages will automatically serve your HTML, CSS, JS, and assets without any build process.

## Features

- ✅ Responsive design
- ✅ Smooth scrolling navigation
- ✅ Contact form with validation
- ✅ Animated card effects
- ✅ Mobile-friendly
- ✅ SEO optimized

## Notes

- Make sure to add your actual `hero-bg.jpg` image to the `assets/` folder
- Update contact form submission to use your backend API (currently uses simulated submission)
- Customize colors, fonts, and content as needed

## License

© 2025 My Concierge in Belize. All Rights Reserved.

