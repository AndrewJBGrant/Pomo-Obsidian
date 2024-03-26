import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

//import { IndexWrapper } from "./context/indexContext";
import NavBar from "./NavBar/Navbar";
import RightSide from "./rightSide";
import { ThemeProviders } from "./providers/ThemeProvider";
import SearchBar from "./components/SearchBar";
import { AppWrapper } from "./context/indexContext";

import SideBarBtn from "./components/SideBarBtn";

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
      <body className="relative z-0 flex bg-neutral-50 dark:bg-[#282c35] rounded-md">
        <AppWrapper>
          <ThemeProviders>
            <NavBar />
            {/* <SearchBar type={""} /> */}
            <main className="min-h-screen flex-auto">
            <div className="relative top-1/2">
              <SideBarBtn />
            </div>
              {children}
            </main>

            <RightSide />
          </ThemeProviders>
        </AppWrapper>
      </body>
    </html>
  );
}
