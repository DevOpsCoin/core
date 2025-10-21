import './globals.css';
import Providers from './providers';
import V1Header from '@/components/V1Header';
import V1Footer from '@/components/V1Footer';
// Analytics not used in layout to avoid build lint warnings

export const metadata = {
  title: 'DevOpsCoin DApp',
  description: 'Wallet-linked actions for the DevOpsCoin ecosystem',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GEDJFWCHCD"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GEDJFWCHCD');
        `,
          }}
        />
      </head>
      <body>
        <Providers>
          <V1Header />
          <main className="min-h-[70vh]">{children}</main>
          <V1Footer />
        </Providers>
      </body>
    </html>
  );
}
