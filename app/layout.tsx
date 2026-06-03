import type { Metadata } from "next";
import "./globals.css";  

export const metadata: Metadata = {
  title: "AI Application Generator",
  description: "Transform natural language into executable application configurations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}