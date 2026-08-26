import type Lenis from "lenis";

export const scrollBus = {
  y: 0,
  velocity: 0,
  progress: 0,
};

let activeLenis: Lenis | undefined;

export function setLenis(lenis: Lenis | undefined) {
  activeLenis = lenis;
}

export function getLenis(): Lenis | undefined {
  return activeLenis;
}

export function scrollTo(
  target: number | string | HTMLElement,
  options?: { offset?: number; immediate?: boolean; duration?: number }
) {
  if (activeLenis) {
    activeLenis.scrollTo(target, options);
  } else if (typeof window !== "undefined") {
    if (typeof target === "number") {
      window.scrollTo({ top: target, behavior: options?.immediate ? "instant" : "smooth" });
    } else if (typeof target === "string") {
      const el = document.querySelector(target);
      el?.scrollIntoView({ behavior: options?.immediate ? "instant" : "smooth" });
    } else if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: options?.immediate ? "instant" : "smooth" });
    }
  }
}
