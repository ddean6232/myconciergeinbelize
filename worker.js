/**
 * Cloudflare Worker to serve static site files
 * This worker serves HTML, CSS, JS, and other static assets
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    // Default to index.html for root path
    if (pathname === '/' || pathname === '') {
      pathname = '/index.html';
    }

    // Create a new request with the pathname
    const assetRequest = new Request(new URL(pathname, url.origin).toString(), {
      method: request.method,
      headers: request.headers,
    });

    try {
      // Fetch the asset from the ASSETS namespace
      // Cloudflare Workers automatically provides this when assets are configured
      const response = await env.ASSETS.fetch(assetRequest);
      
      // If asset not found (404), fall back to index.html for SPA routing
      if (response.status === 404 && pathname !== '/index.html') {
        const indexRequest = new Request(new URL('/index.html', url.origin).toString(), request);
        return await env.ASSETS.fetch(indexRequest);
      }

      return response;
    } catch (error) {
      // Fallback to index.html if there's an error
      console.error('Error fetching asset:', error);
      const indexRequest = new Request(new URL('/index.html', url.origin).toString(), request);
      return await env.ASSETS.fetch(indexRequest);
    }
  }
};

