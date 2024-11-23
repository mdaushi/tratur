import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideBarProvider from "@/components/layouts/sidebar-provider";
import { ModalProvider } from "@/providers/modal-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tratur",
  description: "Simple moves for smarter money",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SideBarProvider>{children}</SideBarProvider>
        <ModalProvider />
      </body>
    </html>
  );
}
