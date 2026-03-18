import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Createscape — Creator Workspace Inspiration",
  description: "Guides to standing desks, ergonomic chairs, lighting, and setup optimization for creators.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
