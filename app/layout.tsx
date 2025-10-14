import "./globals.css";
import { WalletProvider } from "@/lib/wagmi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "DevOpsCoin DApp",
  description: "Wallet-linked actions for the DevOpsCoin ecosystem",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          <Header />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </WalletProvider>
      </body>
    </html>
  );
}
