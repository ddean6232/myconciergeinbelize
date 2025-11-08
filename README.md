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
   - Navigate to **Pages** → **Create a project** (or select your existing project)
   - Click **Connect to Git**
   - Select your repository (`myconciergeinbelize`)
   - Configure build settings:
     - **Framework preset**: None
     - **Build command**: `exit 0`
     - **Build output directory**: `.` (single period - current directory)
     - **Root directory**: `/` (default)
   - Click **Save and Deploy**

3. **FIX: If you see build errors with Wrangler:**
   
   **The build command field is mandatory. Use a simple no-op command.**
   
   Steps to fix:
   1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   2. Navigate to **Pages** → Select your project (`myconciergeinbelize`)
   3. Click **Settings** tab → **Builds & deployments**
   4. Scroll down to **Build configuration** section
   5. Find the **Build command** field
   6. Replace any existing command with: `exit 0`
   7. Set **Build output directory** to `.` (single period - means current directory)
   8. Set **Root directory** to `/` (default)
   9. Click **Save** button
   10. Go to **Deployments** tab
   11. Click the **⋯** (three dots) on the latest failed deployment
   12. Click **Retry deployment**
   
   The `exit 0` command does nothing and exits successfully. Cloudflare Pages will then serve your static files from the current directory.

4. **Custom Domain (Optional)**
   - In your Pages project, go to **Custom domains**
   - Add your domain
   - Update DNS records as instructed

**Important:** This is a static site. The `exit 0` command is a no-op that satisfies the mandatory build command requirement. Cloudflare Pages will automatically serve your HTML, CSS, JS, and assets from the root directory.

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

