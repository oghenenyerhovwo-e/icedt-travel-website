// modules
import type { Metadata } from "next";

// components
import { Navbar, ThemeProvider } from "@/components";

// css
import "./globals.css";

export const metadata: Metadata = {
  title: "Travelsy",
  description: "Travelsy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
