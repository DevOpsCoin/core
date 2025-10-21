'use client';
import React from 'react';

type Props = {
  title?: string;
  message?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export default function ComingSoon({
  title = 'Live Trading coming soon',
  message = 'Trading and on-chain actions are temporarily disabled.',
  children,
  className = '',
}: Props) {
  return (
    <div
      className={`bg-gray-800 border border-cyan-700/40 rounded-lg p-10 text-center ${className}`}
    >
      <h2 className="text-teal-400 font-semibold text-xl mb-3">{title}</h2>
      <p className="text-gray-300 mb-4">{message}</p>
      {children ?? null}
    </div>
  );
}
