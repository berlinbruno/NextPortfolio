import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { socialsquery } from "@/sanity/utils/data";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Berlin Bruno",
};

export default async function RootLayout({ children }) {
  const socials = await socialsquery();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header social={socials} />
             {children}
          <Footer />
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  );
}
