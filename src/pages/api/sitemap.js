export default function handler(req, res) {
    res.setHeader('Content-Type', 'application/xml');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://www.example.com/</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>
        <!-- Add more URLs here -->
    </urlset>`;

    res.status(200).send(sitemap);
}
