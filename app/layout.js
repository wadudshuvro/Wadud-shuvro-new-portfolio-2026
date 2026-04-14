import {
  Geist_Mono,
  Outfit as OutfitFont,
  Ovo as OvoFont,
} from 'next/font/google';
import './globals.css';

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
  title: 'Portfolio - Shuvro',
  description: 'I am Wadud Shuvro',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=(t==='dark')||(t!=='light'&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);var c=document.documentElement.classList;c.toggle('dark',!!d);}catch(e){}})();`,
          }}
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
