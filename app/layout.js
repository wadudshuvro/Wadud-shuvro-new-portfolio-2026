import {
  Geist_Mono,
  Outfit as OutfitFont,
  Ovo as OvoFont,
} from 'next/font/google';
import './globals.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://wadud-shuvro-portfolio.vercel.app';
const personName = 'Wadud Shuvro';
const siteTitle = `${personName} | Frontend Web Developer Portfolio`;
const siteDescription =
  'Wadud Shuvro portfolio showcasing frontend web development projects, services, and experience building high-performance digital products.';

const outfit = OutfitFont({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const ovo = OvoFont({
  subsets: ['latin'],
  weight: ['400'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${personName}`,
  },
  description: siteDescription,
  keywords: [
    'Wadud Shuvro',
    'Wadud Shuvro portfolio',
    'Frontend developer',
    'Next.js portfolio',
    'Web developer',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: `${personName} Portfolio`,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personName,
    url: siteUrl,
    jobTitle: 'Frontend Web Developer',
    description: siteDescription,
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${personName} Portfolio`,
    url: siteUrl,
    description: siteDescription,
    inLanguage: 'en',
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=(t==='dark')||(t!=='light'&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);var c=document.documentElement.classList;c.toggle('dark',!!d);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} ${geistMono.variable} antialiased leading-8 overflow-x-hidden bg-white text-black transition-colors duration-300 dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
