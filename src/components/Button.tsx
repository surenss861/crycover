import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-ink/15";
  const variants = {
    primary:
      "relative overflow-hidden text-cream hover:brightness-105 " +
      "bg-[#2B2B2B] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] " +
      "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_4px_12px_rgba(43,43,43,0.25)]",
    secondary: "bg-sage text-cream hover:bg-sage/90",
    outline: "border-2 border-ink/15 text-ink hover:bg-ink/5 hover:border-ink/25",
  };
  const styles = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} onClick={onClick}>
      {children}
    </button>
  );
}
