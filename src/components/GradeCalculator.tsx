"use client";

import { useState, useEffect } from "react";
import CalculatorCard from "@/components/CalculatorCard";
import { Plus, Trash2, Info } from "lucide-react";
import ResultScanner from "@/components/ResultScanner";
import { ExtractedSubject } from "@/lib/grade-matcher";

interface Subject {
  id: string;
  grade: string;
  credits: string;
}

interface GradeCalculatorProps {
  university: string;
  grades: { label: string; value: number }[];
}

export default function GradeCalculator({ university, grades }: GradeCalculatorProps) {
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: "1", grade: "", credits: "" },
    { id: "2", grade: "", credits: "" },
    { id: "3", grade: "", credits: "" },
  ]);

  const handleScanComplete = (extracted: ExtractedSubject[]) => {
    const newSubjects = extracted.map((s, index) => ({
      id: Math.random().toString(),
      grade: findGradeValue(s.grade),
      credits: s.credits,
    }));
    setSubjects(newSubjects);
  };

  const findGradeValue = (label: string) => {
    const match = grades.find(g => g.label === label || g.label.toLowerCase() === label.toLowerCase());
    return match ? match.value.toString() : "";
  };
  const [cgpa, setCGPA] = useState<number | null>(null);

  const addSubject = () => {
    setSubjects([...subjects, { id: Math.random().toString(), grade: "", credits: "" }]);
  };

  const removeSubject = (id: string) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter((s) => s.id !== id));
    }
  };

  const updateSubject = (id: string, field: keyof Subject, value: string) => {
    setSubjects(
      subjects.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  useEffect(() => {
    let totalGradePoints = 0;
    let totalCredits = 0;

    subjects.forEach((s) => {
      const gradeValue = parseFloat(s.grade);
      const credits = parseFloat(s.credits);

      if (!isNaN(gradeValue) && !isNaN(credits)) {
        totalGradePoints += gradeValue * credits;
        totalCredits += credits;
      }
    });

    if (totalCredits > 0) {
      setCGPA(totalGradePoints / totalCredits);
    } else {
      setCGPA(null);
    }
  }, [subjects]);

  return (
    <CalculatorCard 
      title={`${university} Grade Calculator`}
      description="Enter your subject grades and credits to calculate your GPA/CGPA."
    >
      <div className="space-y-4">
        <ResultScanner university={university} onScanComplete={handleScanComplete} />
        
        <div className="grid grid-cols-12 gap-4 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">
          <div className="col-span-1">#</div>
          <div className="col-span-6 md:col-span-7">Grade</div>
          <div className="col-span-3 md:col-span-2">Credits</div>
          <div className="col-span-2 flex justify-end"></div>
        </div>
        
        {subjects.map((sub, index) => (
          <div key={sub.id} className="grid grid-cols-12 gap-4 items-center animate-in fade-in slide-in-from-top-1 duration-200">
            <div className="col-span-1 text-slate-400 font-medium">{index + 1}</div>
            <div className="col-span-6 md:col-span-7">
              <select
                value={sub.grade}
                onChange={(e) => updateSubject(sub.id, "grade", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all bg-white"
              >
                <option value="">Select Grade</option>
                {grades.map((g) => (
                  <option key={g.label} value={g.value}>
                    {g.label} ({g.value})
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-3 md:col-span-2">
              <input
                type="number"
                min="1"
                placeholder="4"
                value={sub.credits}
                onChange={(e) => updateSubject(sub.id, "credits", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
              />
            </div>
            <div className="col-span-2 flex justify-end">
              <button
                onClick={() => removeSubject(sub.id)}
                disabled={subjects.length === 1}
                className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all disabled:opacity-0"
                aria-label="Remove subject"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}

        <div className="pt-6 flex flex-col md:flex-row gap-4 items-center justify-between border-t border-slate-50 mt-4">
          <button
            onClick={addSubject}
            className="w-full md:w-auto px-6 py-3 flex items-center justify-center gap-2 font-semibold text-primary-600 hover:bg-primary-50 rounded-xl transition-all border border-dashed border-primary-200"
          >
            <Plus size={20} /> Add Subject
          </button>

          {cgpa !== null && (
            <div className="w-full md:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl shadow-xl flex flex-col items-center justify-center animate-in zoom-in duration-300">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Calculated GPA</span>
              <span className="text-4xl font-black">{cgpa.toFixed(2)}</span>
            </div>
          )}
        </div>
        
        <div className="mt-8 flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 italic text-xs text-slate-500">
          <Info size={16} className="text-primary-500 shrink-0 mt-0.5" />
          <p>This calculator uses the specific grading scale for {university}. Ensure you select the correct grades as per your university mark sheet.</p>
        </div>
      </div>
    </CalculatorCard>
  );
}
