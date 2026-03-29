interface SEOContentProps {
  title: string;
  children: React.ReactNode;
}

export default function SEOContent({ title, children }: SEOContentProps) {
  return (
    <section className="mt-16 prose prose-slate max-w-none">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">{title}</h2>
      <div className="text-slate-600 space-y-4 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
