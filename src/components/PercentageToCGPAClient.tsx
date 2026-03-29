"use client";

import { useState } from "react";
import CalculatorCard from "@/components/CalculatorCard";

export default function PercentageToCGPAClient() {
  const [percentage, setPercentage] = useState("");
  const cgpa = percentage ? (parseFloat(percentage) / 9.5).toFixed(2) : null;

  return (
    <CalculatorCard title="Percentage to CGPA Converter">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Enter Total Percentage (%)</label>
          <input
            type="number"
            step="0.01"
            min="0"
            max="100"
            placeholder="e.g. 76"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-lg font-medium"
          />
        </div>

        {cgpa !== null && !isNaN(parseFloat(cgpa)) && (
          <div className="bg-primary-50 border border-primary-100 p-8 rounded-2xl flex flex-col items-center justify-center animate-in zoom-in duration-300">
            <span className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">Equivalent CGPA (10-point Scale)</span>
            <span className="text-5xl font-black text-primary-900">{cgpa}</span>
          </div>
        )}
      </div>
    </CalculatorCard>
  );
}
