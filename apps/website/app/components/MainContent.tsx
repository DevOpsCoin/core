import React from 'react';

type Props = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

export default function MainContent({
  children,
  className = '',
  ...props
}: Props) {
  return (
    <section
      {...props}
      className={`relative max-w-4xl mx-auto mt-10 px-6 py-12 bg-gray-900 rounded-xl border border-cyan-700/40 shadow-lg overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
}
