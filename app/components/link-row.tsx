import { LinkItem } from "../types";

export default function LinkRow({ title, prompt, cta, href, brand, icon: Icon }: LinkItem) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      style={{ "--brand": brand } as React.CSSProperties}
      className="group flex items-center gap-4 rounded-2xl bg-paper p-3 pr-4 text-deep transition-transform hover:-translate-y-0.5"
    >
      <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-deep text-paper transition-colors group-hover:bg-[var(--brand)]">
        <Icon className="text-2xl" aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-lg font-bold leading-tight">{title}</span>
        <span className="block text-sm leading-snug text-deep/70">{prompt}</span>
      </span>
      <span className="shrink-0 rounded-full border-2 border-deep px-3 py-1 text-sm font-bold transition-colors group-hover:bg-deep group-hover:text-paper">
        {cta}
      </span>
    </a>
  );
}
