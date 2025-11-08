# My Concierge in Belize

A modern, responsive website for elite travel, expat, and lifestyle services in Belize.

## Project Structure

```
myconciergeinbelize/
├── worker.js           # Cloudflare Worker script
├── wrangler.toml       # Wrangler configuration
├── package.json        # Node.js dependencies
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

## Deployment to Cloudflare Workers

This site is configured to deploy as a Cloudflare Worker with static assets.

### Deployment Steps

1. **Install Node.js and npm** (if not already installed)

2. **Install Wrangler CLI**:
   ```bash
   npm install -g wrangler
   ```

3. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```
   This will open your browser to authenticate with Cloudflare.

4. **Deploy the Worker**:
   ```bash
   npm install
   npm run deploy
   ```
   Or directly:
   ```bash
   wrangler deploy
   ```

5. **Your site will be live at**:
   `https://myconciergeinbelize.<your-subdomain>.workers.dev`

### Project Structure for Workers

```
myconciergeinbelize/
├── worker.js          # Cloudflare Worker script
├── wrangler.toml      # Wrangler configuration
├── package.json       # Node.js dependencies
├── index.html         # Main HTML file
├── styles.css         # Stylesheet
├── main.js            # JavaScript functionality
└── assets/            # Images and media files
    └── hero-bg.jpg    # Hero background image
```

### How It Works

- The `worker.js` file handles incoming requests and serves static assets
- The `wrangler.toml` configuration specifies the assets directory
- Static files (HTML, CSS, JS, images) are bundled with the Worker
- The Worker serves all requests, with fallback to `index.html` for routing

### Custom Domain (Optional)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** → Your worker
3. Go to **Settings** → **Triggers**
4. Add a custom domain under **Routes**
5. Update your DNS records as instructed

### Local Development

Test your Worker locally:
```bash
npm run dev
```

This will start a local server at `http://localhost:8787`

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



Test Test