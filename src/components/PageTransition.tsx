"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Enhance completed route changes without intercepting links or delaying navigation. */
export default function PageTransition() {
  const pathname = usePathname();
  const previousPath = useRef(pathname);

  useLayoutEffect(() => {
    // Leave initial loads, same-page links and hash navigation untouched.
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;

    const content = document.getElementById("main-content");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!content || reducedMotion.matches || typeof content.animate !== "function") {
      return;
    }

    // Animate only page content: shared navigation and theme controls stay steady.
    // No transform, hidden base style or fill mode: content is always usable.
    const animation = content.animate([{ opacity: 0.25 }, { opacity: 1 }], {
      duration: 180,
      easing: "ease-out",
    });
    const cancelOnReducedMotion = () => {
      if (reducedMotion.matches) animation.cancel();
    };
    reducedMotion.addEventListener("change", cancelOnReducedMotion);

    return () => {
      animation.cancel();
      reducedMotion.removeEventListener("change", cancelOnReducedMotion);
    };
  }, [pathname]);

  return null;
}
