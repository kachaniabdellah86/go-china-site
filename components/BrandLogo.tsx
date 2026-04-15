import Image from "next/image";

type BrandLogoProps = {
  showWordmark?: boolean;
  mode?: "full" | "mark" | "wordmark";
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "light" | "dark";
  className?: string;
};

const sizeClasses = {
  xs: {
    wrapper: "gap-2",
    icon: 30,
    title: "text-xs sm:text-sm",
    clearSpace: "p-1.5",
  },
  sm: {
    wrapper: "gap-2",
    icon: 34,
    title: "text-[0.92rem] sm:text-[1.02rem]",
    clearSpace: "p-1.5",
  },
  md: {
    wrapper: "gap-2.5",
    icon: 40,
    title: "text-[1rem] sm:text-[1.18rem]",
    clearSpace: "p-2",
  },
  lg: {
    wrapper: "gap-4",
    icon: 62,
    title: "text-xl sm:text-3xl",
    clearSpace: "p-3",
  },
} as const;

export default function BrandLogo({
  showWordmark = true,
  mode,
  size = "md",
  variant = "dark",
  className = "",
}: BrandLogoProps) {
  const resolvedMode = mode ?? (showWordmark ? "full" : "mark");
  const isDark = variant === "dark";
  const config = sizeClasses[size];
  const textTone = isDark ? "text-white" : "text-zinc-950";
  const secondaryTone = isDark ? "text-white/58" : "text-zinc-500";

  return (
    <div
      className={`inline-flex min-w-0 items-center rounded-[1.4rem] ${config.clearSpace} ${className}`}
      aria-label="YALLA CHINA"
    >
      {resolvedMode !== "wordmark" ? (
        <div className={`flex shrink-0 items-center ${resolvedMode === "mark" ? "" : config.wrapper}`}>
          <Image
            src="/yalla-china-mark.svg"
            alt={resolvedMode === "mark" ? "YALLA CHINA logo" : ""}
            aria-hidden={resolvedMode === "mark" ? undefined : "true"}
            width={config.icon}
            height={config.icon}
            sizes={`${config.icon}px`}
            priority={size === "lg" || size === "md"}
            className="h-auto w-auto object-contain"
          />
        </div>
      ) : null}

      {resolvedMode !== "mark" ? (
        <div className="min-w-0">
          <p
            className={`${config.title} ${textTone} font-black uppercase tracking-[0.04em] leading-none`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            YALLA <span>CHINA</span>
            <span className="text-[#EDB80B]">.</span>
          </p>
          {resolvedMode === "full" ? (
            <p className={`mt-1 text-[10px] font-medium uppercase tracking-[0.24em] ${secondaryTone}`}>
              Dream. Trust. Achieve.
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
