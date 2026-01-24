import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ScrollAnimator from "@/components/ScrollAnimator";

export const metadata: Metadata = {
  title: "Sazzad Hossain Foysal | Android Developer",
  description:
    "Android developer building high-performance apps with Kotlin, Jetpack, and clean architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){
  try {
    var stored = localStorage.getItem('theme');
    var initial = (stored === 'light' || stored === 'dark') ? stored : 'light';
    document.documentElement.dataset.theme = initial;
  } catch (e) {}
})();`}
        </Script>
        <ScrollAnimator />
        {children}
      </body>
    </html>
  );
}
