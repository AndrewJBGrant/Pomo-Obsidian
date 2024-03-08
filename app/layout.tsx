import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

//import { IndexWrapper } from "./context/indexContext";

import NavBar from "./NavBar/Navbar";
import RightSide from "./rightSide";
import { ThemeProviders } from "./providers/ThemeProvider";

const MainFont = Roboto({
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: `Focus-App`,
  description: "A quiet spot to gather your thoughts and focus",
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
      <body className="flex bg-neutral-50 dark:bg-[#282c35] rounded-md">
        <ThemeProviders>
          <NavBar />

          <main className="min-h-screen mx-auto max-w-2xl px-5 py-12 grow">
            {children}
          </main>

          <RightSide />
        </ThemeProviders>
      </body>
    </html>
  );
}
