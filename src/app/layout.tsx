import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Palette",
  description: "It's awesome!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <nav>
          <ul>
            <li>
              <NavigationLink href="/colors">Colors</NavigationLink>
            </li>
            <li>
              <NavigationLink href="/fonts">Fonts</NavigationLink>
            </li>
          </ul>
        </nav> */}
        {children}
      </body>
    </html>
  );
}
