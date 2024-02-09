"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children}: { children: React.ReactNode}) {
return <ThemeProvider attribute="class" defaultTheme="system"
enableSystem>{children}</ThemeProvider>
}

// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#using-context-providers
