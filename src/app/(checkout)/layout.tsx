import type { Metadata } from "next";

import {
  Footer,
  PriceProgressBar,
} from "@/components/shared";
import { Header } from "@/components/shared/checkout-components/Header";

export const metadata: Metadata = {
  title: "Якитория | Корзина",
};

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="min-h-screen">
        <Header/>
          {children}
        <PriceProgressBar />
      </main>
      <Footer className="mt-[140px] py-[40px] " />
    </>
  );
}
