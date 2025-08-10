
import type { Metadata } from "next";
import "./../styles/globals.css";

export const metadata: Metadata = {
  title: "Globade Solution – Trade Intelligence",
  description: "Global export–import data & insights",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
