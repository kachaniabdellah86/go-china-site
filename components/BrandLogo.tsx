type BrandLogoProps = {
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  className?: string;
};

const sizeClasses = {
  sm: {
    wrapper: "gap-2.5",
    icon: "h-9 w-9 sm:h-10 sm:w-10",
    title: "text-sm sm:text-base",
  },
  md: {
    wrapper: "gap-3",
    icon: "h-10 w-10 sm:h-11 sm:w-11",
    title: "text-base sm:text-xl",
  },
  lg: {
    wrapper: "gap-4",
    icon: "h-14 w-14 sm:h-16 sm:w-16",
    title: "text-xl sm:text-3xl",
  },
} as const;

export default function BrandLogo({
  showWordmark = true,
  size = "md",
  variant = "dark",
  className = "",
}: BrandLogoProps) {
  const tone = variant === "dark" ? "text-white" : "text-zinc-950";
  const config = sizeClasses[size];

  return (
    <div
      className={`flex min-w-0 items-center ${config.wrapper} ${tone} ${className}`}
    >
      <img
        src="/yalla-china-mark.svg"
        alt={showWordmark ? "" : "YALLA CHINA logo"}
        aria-hidden={showWordmark ? "true" : undefined}
        className={`${config.icon} shrink-0 object-contain`}
      />

      {showWordmark ? (
        <div className="min-w-0">
          <p
            className={`${config.title} leading-none font-black uppercase tracking-tight`}
          >
            YALLA <span>CHINA</span>
            <span className="text-[#EDB80B]">.</span>
          </p>
        </div>
      ) : null}
    </div>
  );
}
