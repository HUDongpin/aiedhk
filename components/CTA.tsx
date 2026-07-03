import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function CTA({ href, children, variant = "primary" }: CTAProps) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-black transition hover:-translate-y-0.5",
        variant === "primary"
          ? "bg-aied-ink text-white shadow-card hover:bg-aied-blue"
          : "border border-slate-200 bg-white text-aied-ink shadow-sm hover:border-aied-cyan hover:text-aied-blue"
      )}
    >
      {children}
    </Link>
  );
}
