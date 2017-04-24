var sm = require('sitemap'),
    fs = require('fs');

var sitemap = sm.createSitemap({
    hostname: 'https://www.upyun.com',
    cacheTime: 600000,  //600 sec (10 min) cache purge period
    urls: [
        { url: '/' , changefreq: 'weekly', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/index.html' },
        { url: '/products/cdn', changefreq: 'weekly', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/products/cdn/index.html' },
        { url: '/products/live'    , changefreq: 'weekly', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/products/live/index.html' }
        // { url: '/' , changefreq: 'weekly', priority: 0.8 },
        // { url: '/products/cdn', changefreq: 'weekly', priority: 0.8 },
        // { url: '/products/live'    , changefreq: 'weekly', priority: 0.8 }
    ]
});

fs.writeFileSync("../sitemap.xml", sitemap.toString());