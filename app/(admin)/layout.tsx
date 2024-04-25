import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "../globals.css";
import "./_globals.css";

import Nav from "./_partials/Nav";
import Header from "./_partials/Header";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest"
});

export const metadata: Metadata = {
  title: "Admin Dashboard"
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={onest.variable}>
        <div className="container_content">
          <Nav />
          <div className="content">
            <Header />
            <main className="container">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
