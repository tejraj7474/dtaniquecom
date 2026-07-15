import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import { FloatingContact } from "../components/FloatingContact";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "D'TANIQUE — The Derma Clinic, JP Nagar Bangalore" },
      { name: "description", content: "D'TANIQUE — The Derma Clinic in J.P. Nagar, Bengaluru, near Jayanagar, BTM & Bannerghatta Road. Premium dermatology, laser hair removal, HydraFacial and advanced skin treatments by expert dermatologists." },
      { name: "author", content: "D'TANIQUE — The Derma Clinic" },
      { property: "og:title", content: "D'TANIQUE — The Derma Clinic, JP Nagar Bangalore" },
      { property: "og:description", content: "D'TANIQUE — The Derma Clinic in J.P. Nagar, Bengaluru, near Jayanagar, BTM & Bannerghatta Road. Premium dermatology, laser hair removal, HydraFacial and advanced skin treatments by expert dermatologists." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "D'TANIQUE" },
      { property: "og:url", content: "https://dtaniquethedermaclinicjpnagar.com" },
      { property: "og:image", content: "https://dtaniquethedermaclinicjpnagar.com/og-image.jpg" },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "D'TANIQUE — The Derma Clinic, JP Nagar Bangalore" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "D'TANIQUE — The Derma Clinic, JP Nagar Bangalore" },
      { name: "twitter:description", content: "D'TANIQUE — The Derma Clinic in J.P. Nagar, Bengaluru, near Jayanagar, BTM & Bannerghatta Road. Premium dermatology, laser hair removal, HydraFacial and advanced skin treatments." },
      { name: "twitter:image", content: "https://dtaniquethedermaclinicjpnagar.com/og-image.jpg" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=AW-17997106207",
      },
      {
        children:
          "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-17997106207');function gtag_report_conversion(url){var callback=function(){if(typeof(url)!='undefined'){window.location=url;}};gtag('event','conversion',{'send_to':'AW-17997106207/j35dCKWxoawcEJ-Y2IVD','event_callback':callback});return false;}function gtag_report_whatsapp_conversion(url){var callback=function(){if(typeof(url)!='undefined'){window.open(url,'_blank');}};gtag('event','conversion',{'send_to':'AW-17997106207/9NwVCPz15a4cEJ-Y2IVD','value':500.0,'currency':'INR','event_callback':callback});return false;}",
      },
      {
        src: "https://gbp.3local.com/widget.js",
        "data-profile-id": "67ba6144-b43b-4c8e-9f3c-c9ae1e0f0ca8",
      } as any,
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <FloatingContact />
    </>
  );
}
