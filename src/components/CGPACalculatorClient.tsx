"use client";

import { useState, useEffect } from "react";
import CalculatorCard from "@/components/CalculatorCard";
import { Plus, Trash2 } from "lucide-react";

interface Semester {
  id: string;
  sgpa: string;
  credits: string;
}

export default function CGPACalculatorClient() {
  const [semesters, setSemesters] = useState<Semester[]>([
    { id: "1", sgpa: "", credits: "" },
  ]);
  const [cgpa, setCGPA] = useState<number | null>(null);

  const addSemester = () => {
    setSemesters([...semesters, { id: Math.random().toString(), sgpa: "", credits: "" }]);
  };

  const removeSemester = (id: string) => {
    if (semesters.length > 1) {
      setSemesters(semesters.filter((s) => s.id !== id));
    }
  };

  const updateSemester = (id: string, field: keyof Semester, value: string) => {
    setSemesters(
      semesters.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  useEffect(() => {
    let totalGradePoints = 0;
    let totalCredits = 0;

    semesters.forEach((s) => {
      const sgpa = parseFloat(s.sgpa);
      const credits = parseFloat(s.credits);

      if (!isNaN(sgpa) && !isNaN(credits)) {
        totalGradePoints += sgpa * credits;
        totalCredits += credits;
      }
    });

    if (totalCredits > 0) {
      setCGPA(totalGradePoints / totalCredits);
    } else {
      setCGPA(null);
    }
  }, [semesters]);

  return (
    <CalculatorCard 
      title="Cumulative Grade Point Average"
      description="Add your semester SGPA and total credits earned."
    >
      <div className="space-y-4">
        <div className="grid grid-cols-12 gap-4 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">
          <div className="col-span-1">#</div>
          <div className="col-span-5 md:col-span-6">SGPA / Semester GPA</div>
          <div className="col-span-4 md:col-span-3">Credits</div>
          <div className="col-span-2"></div>
        </div>
        
        {semesters.map((sem, index) => (
          <div key={sem.id} className="grid grid-cols-12 gap-4 items-center animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="col-span-1 text-slate-400 font-medium">S{index + 1}</div>
            <div className="col-span-5 md:col-span-6 font-medium">
              <input
                type="number"
                step="0.01"
                min="0"
                max="10"
                placeholder="e.g. 8.5"
                value={sem.sgpa}
                onChange={(e) => updateSemester(sem.id, "sgpa", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-slate-300"
              />
            </div>
            <div className="col-span-4 md:col-span-3">
              <input
                type="number"
                min="1"
                placeholder="20"
                value={sem.credits}
                onChange={(e) => updateSemester(sem.id, "credits", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-slate-300"
              />
            </div>
            <div className="col-span-2 flex justify-end">
              <button
                onClick={() => removeSemester(sem.id)}
                disabled={semesters.length === 1}
                className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all disabled:opacity-0"
                aria-label="Remove semester"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}

        <div className="pt-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <button
            onClick={addSemester}
            className="w-full md:w-auto px-6 py-3 flex items-center justify-center gap-2 font-semibold text-primary-600 hover:bg-primary-50 rounded-xl transition-all border border-dashed border-primary-200 hover:border-primary-300"
          >
            <Plus size={20} /> Add Semester
          </button>

          {cgpa !== null && (
            <div className="w-full md:w-auto bg-primary-600 text-white px-8 py-4 rounded-2xl shadow-lg shadow-primary-200 flex flex-col items-center justify-center animate-in zoom-in duration-500">
              <span className="text-xs font-semibold uppercase tracking-widest opacity-80 mb-1">Your CGPA</span>
              <span className="text-4xl font-black">{cgpa.toFixed(2)}</span>
            </div>
          )}
        </div>
      </div>
    </CalculatorCard>
  );
}
