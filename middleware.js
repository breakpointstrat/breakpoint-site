// playbook.breakpointstrat.com is served from playbook-site/. This runs before the
// static files, so the subdomain's / robots.txt and sitemap.xml aren't the main site's.
const HOST = "playbook.breakpointstrat.com";
const PATHS = {
  "/": "/playbook-site/",
  "/robots.txt": "/playbook-site/robots.txt",
  "/sitemap.xml": "/playbook-site/sitemap.xml",
  "/og.png": "/playbook-site/og.png",
};

export const config = { matcher: ["/", "/robots.txt", "/sitemap.xml", "/og.png"] };

export default function middleware(request) {
  const url = new URL(request.url);
  if (url.hostname !== HOST) return;
  return new Response(null, { headers: { "x-middleware-rewrite": new URL(PATHS[url.pathname], url).toString() } });
}
