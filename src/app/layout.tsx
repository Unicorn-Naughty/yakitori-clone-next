import { Comfortaa } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/shared/providers";
const comfortaa = Comfortaa({
  subsets: ["cyrillic"],
  variable: "--font-comfortaa",
  weight: ["400", "500", "600", "700"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" data-rh="true" href="/small_logo.svg" />
      </head>
      <body
        className={`${comfortaa.className} antialiased bg-white dark:bg-black`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
