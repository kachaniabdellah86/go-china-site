type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
};

const sizes = {
  default: "max-w-6xl",
  wide: "max-w-7xl",
  narrow: "max-w-4xl",
} as const;

export default function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  return (
    <div className={`mx-auto w-full ${sizes[size]} px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
