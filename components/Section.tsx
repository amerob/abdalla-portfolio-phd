import React from 'react';

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className = "",
}) => {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`py-20 border-b border-gray-200 last:border-none ${className}`}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2
            id={`${id}-title`}
            className="pl-4 border-l-4 border-academic-600 text-3xl font-serif font-semibold text-academic-900"
          >
            {title}
          </h2>
        </header>

        <div className="space-y-8 text-academic-800">
          {children}
        </div>
      </div>
    </section>
  );
};
