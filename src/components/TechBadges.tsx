export function TechBadges({ items }: { items: Array<{ name: string; value: number }> }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it) => (
        <span
          key={it.name}
          className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/80 dark:border-white/15 dark:bg-black dark:text-white/80"
          title={`${it.value}`}
        >
          {it.name}
        </span>
      ))}
    </div>
  );
}
