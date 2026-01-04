import React from 'react';

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
    return (
        <section id={id} className={`py-16 border-b border-gray-100 last:border-0 ${className}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <h2 className="text-2xl font-serif font-bold text-academic-900 mb-8 border-l-4 border-academic-500 pl-4">
                    {title}
                </h2>
                <div className="space-y-6">
                    {children}
                </div>
            </div>
        </section>
    );
};