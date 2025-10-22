import './globals.css';
import Providers from './providers';
import V1Header from '@/components/V1Header';
import V1Footer from '@/components/V1Footer';
import Script from 'next/script';

export const metadata = {
  title: 'DevOpsCoin — Where Pipelines Meet Protocols',
  description:
    'DevOpsCoin blends DevOps culture and Solana protocols to fund open-source builders through the Ship-It Fund and TreasuryOps programs.',
  metadataBase: new URL('https://devopscoin.ai'),
  alternates: {
    canonical: 'https://devopscoin.ai',
  },
  openGraph: {
    title: 'DevOpsCoin — Where Pipelines Meet Protocols',
    description:
      'A Solana-based ecosystem funding open-source DevOps builders through transparent grants.',
    url: 'https://devopscoin.ai',
    siteName: 'DevOpsCoin',
    images: [
      {
        url: 'https://devopscoin.ai/banner.png',
        width: 1200,
        height: 630,
        alt: 'DevOpsCoin Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DevOpsCoin',
    title: 'DevOpsCoin — Where Pipelines Meet Protocols',
    description:
      'A Solana-powered token supporting open-source DevOps projects via the Ship-It Fund.',
    images: ['https://devopscoin.ai/banner.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://devopscoin.ai" />
      </head>
      <body className="bg-gray-950 text-gray-100 antialiased">
        {/* Google Analytics (Next.js safe) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GEDJFWCHCD"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GEDJFWCHCD');
            `,
          }}
        />

        <Providers>
          <V1Header />
          <main className="min-h-[70vh]">{children}</main>
          <V1Footer />
        </Providers>
      </body>
    </html>
  );
}
