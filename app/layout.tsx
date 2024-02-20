import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import NavBar from "./NavBar/Navbar";
import RightSide from "./rightSide";
import { Providers } from "./providers";
import SearchBar from "./components/SearchBar";

const MainFont = Roboto({
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: `Focus-App`,
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${MainFont.className} antialiased`}
      suppressHydrationWarning
    >
      <body className="grid grid-cols-9 gap-1 relative bg-neutral-50 dark:bg-zinc-800 rounded-md">
        <Providers>
          <NavBar />

          <span className="justify-self-center">
            <SearchBar type={"/"} />
          </span>
          <main className="col-start-1 col-end-7">{children}</main>
          <RightSide />
        </Providers>
      </body>
    </html>
  );
}
