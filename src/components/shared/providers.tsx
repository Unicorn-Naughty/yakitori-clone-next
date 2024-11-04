"use client";
import React, { FC } from "react";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "../context/theme";

export const Providers: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Toaster />
      <SessionProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </SessionProvider>
      <NextTopLoader color="#EF4444" />
    </>
  );
};
