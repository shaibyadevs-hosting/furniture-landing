import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Touchwood Furnitech | Premium Modular Furniture",
  description: "India's leading manufacturer of modular furniture. Quality, expertise, and experience in premium stylish furniture.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
