import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "../globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest"
});

export const metadata: Metadata = {
  title: "Admin"
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={onest.variable}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
