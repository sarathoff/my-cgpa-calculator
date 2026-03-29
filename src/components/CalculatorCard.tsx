import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CalculatorCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export default function CalculatorCard({
  title,
  description,
  children,
  className,
}: CalculatorCardProps) {
  return (
    <div className={cn("bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-8", className)}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">{title}</h2>
        {description && <p className="text-slate-500 text-sm">{description}</p>}
      </div>
      {children}
    </div>
  );
}
