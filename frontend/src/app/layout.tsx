import type { Metadata } from "next";
import { Anek_Telugu, Delius } from "next/font/google";
import "./globals.css";

const anekTelegu = Anek_Telugu({
  variable: "--font-anek-telegu-sans",
  subsets: ["latin"],
  weight: "500",
});

const delius = Delius({
  variable: "--font-delius-cursive",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Te Quiero Más",
  description: "Learning 'I Love You' in different languages",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${delius.variable} ${anekTelegu.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
