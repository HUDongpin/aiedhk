import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  titleClassName?: string;
}

export default function SectionHeader({ eyebrow, title, description, center = false, titleClassName }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && <p className="text-sm font-black uppercase tracking-[0.25em] text-aied-blue">{eyebrow}</p>}
      <h2 className={cn("mt-3 break-words font-black tracking-tight text-aied-ink text-balance", titleClassName ?? "text-3xl sm:text-4xl lg:text-5xl")}>{title}</h2>
      {description && <p className="mt-5 text-lg leading-8 text-aied-muted">{description}</p>}
    </div>
  );
}
