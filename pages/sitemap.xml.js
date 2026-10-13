import { getSiteUrlFromRequest, toAbsoluteUrl } from '@utilities';

export default function SitemapXml() {
  return null;
}

export function getServerSideProps({ req, res }) {
  const siteUrl = getSiteUrlFromRequest(req);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${toAbsoluteUrl('/', siteUrl)}</loc>
  </url>
</urlset>`;

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.write(xml);
  res.end();

  return {
    props: {},
  };
}
