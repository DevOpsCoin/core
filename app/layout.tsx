import "./globals.css";
import Providers from "./providers";
import V1Header from "@/components/V1Header";
import V1Footer from "@/components/V1Footer";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "DevOpsCoin DApp",
  description: "Wallet-linked actions for the DevOpsCoin ecosystem",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
