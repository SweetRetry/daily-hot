import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "./globals.css";
import "@/styles/scrollbar.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "今日热榜",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />

          <main className="mt-24 px-4 pc:px-8">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
