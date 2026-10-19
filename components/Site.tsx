"use client";

import { useCallback, useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BootScreen } from "@/components/sections/BootScreen";
import { Hero } from "@/components/sections/Hero";
import { Mind } from "@/components/sections/Mind";
import { Treasury } from "@/components/sections/Treasury";
import { Programs } from "@/components/sections/Programs";
import { BiscuitCompiler } from "@/components/sections/BiscuitCompiler";
import { Gallery } from "@/components/sections/Gallery";
import { ToastProvider } from "@/components/ui/Toast";

export default function Site() {
  const [booting, setBooting] = useState(true);
  const enter = useCallback(() => setBooting(false), []);

  useEffect(() => {
    if (/[?&]nb=1/.test(window.location.search)) setBooting(false);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("booting", booting);
    return () => document.body.classList.remove("booting");
  }, [booting]);

  return (
    <ToastProvider>
      <a className="skip" href="#top">
        Skip to content
      </a>
      {booting ? <BootScreen onEnter={enter} /> : null}
      <Header />
      <main id="top">
        <Hero />
        <Mind />
        <Treasury />
        <Programs />
        <BiscuitCompiler />
        <Gallery />
      </main>
      <Footer />
    </ToastProvider>
  );
}
