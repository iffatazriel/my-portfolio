import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorDot from "@/components/ui/CursorDot";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" style={{ colorScheme: "light" }}>
      <body>
        <CursorDot />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
