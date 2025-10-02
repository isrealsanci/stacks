"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { DeviceDetectProvider } from "./DeviceDetectProvider";

export function RootProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DeviceDetectProvider>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </DeviceDetectProvider>
  );
}