import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Text Parallax",
  description: "A web animation featuring a Text Parallax with sliding text on scroll. Made with Framer Motion and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
