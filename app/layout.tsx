import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel App Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="relative overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
