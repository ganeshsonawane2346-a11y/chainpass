interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <div className="mb-8">
      {badge && (
        <span className="mb-3 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
          {badge}
        </span>
      )}
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-2 max-w-2xl text-slate-400">{description}</p>
      )}
    </div>
  );
}
