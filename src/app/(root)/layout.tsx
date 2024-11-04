import type { Metadata } from "next";

import {
  ArrowToTop,
  Footer,
  Header,
  PriceProgressBar,
} from "@/components/shared";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Якитория",
};

export default async function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <main className="min-h-screen">
        <Suspense>
          <Header />
        </Suspense>
        {modal}
        <div className="">
          {children}
          <ArrowToTop />
        </div>
        <PriceProgressBar />
      </main>
      <Footer className="mt-[140px] py-[40px] " />
    </>
  );
}
