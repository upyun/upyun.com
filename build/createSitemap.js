var sm = require('sitemap'),
    fs = require('fs');

var sitemap = sm.createSitemap({
    hostname: 'https://www.upyun.com',
    cacheTime: 600000,  //600 sec (10 min) cache purge period
    urls: [
        { url: '/' , changefreq: 'daily', priority: 1, lastmodrealtime: true, lastmodfile: 'prerender/index.html' },
        { url: '/products/cdn', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/products/cdn/index.html' },
        { url: '/products/file-storage', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/products/file-storage/index.html' },
        { url: '/products/live', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/products/live/index.html' },
        { url: '/products/marketing', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/products/marketing/index.html' },
        { url: '/products/process', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/products/process/index.html' },
        { url: '/products/sms', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/products/sms/index.html' },
        { url: '/products/ssl', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/products/ssl/index.html' },
        { url: '/products/vod', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/products/vod/index.html' },
        { url: '/solutions/ecommerce', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/solutions/ecommerce/index.html' },
        { url: '/solutions/education', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/solutions/education/index.html' },
        { url: '/solutions/fusionstorage', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/solutions/fusionstorage/index.html' },
        { url: '/solutions/game', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/solutions/game/index.html' },
        { url: '/solutions/meida', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/solutions/meida/index.html' },
        { url: '/solutions/mobile', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/solutions/mobile/index.html' },
        { url: '/pricing', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/pricing/index.html' },
        { url: '/price_instruction', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/price_instruction/index.html' },
        { url: '/chunyu', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/chunyu/index.html' },
        { url: '/league', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/league/index.html' },
        { url: '/https', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/https/index.html' },
        { url: '/webp', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/webp/index.html' },
        { url: '/brandnew', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/brandnew/index.html' },
        { url: '/media_reports', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/media_reports/index.html' },
        { url: '/about_us', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/about_us/index.html' },
        { url: '/contact', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/contact/index.html' },
        { url: '/join_us', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/join_us/index.html' },
        { url: '/partners', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/partners/index.html' },
        { url: '/terms', changefreq: 'daily', priority: 0.8, lastmodrealtime: true, lastmodfile: 'prerender/terms/index.html' }
    ]
});

fs.writeFileSync("sitemap.xml", sitemap.toString());