import GradeCalculator from "@/components/GradeCalculator";
import SEOContent from "@/components/SEOContent";
import SchemaMarkup from "@/components/SchemaMarkup";

const SRM_GRADES = [
  { label: "O", value: 10 },
  { label: "A+", value: 9 },
  { label: "A", value: 8 },
  { label: "B+", value: 7 },
  { label: "B", value: 6 },
  { label: "C", value: 5 },
  { label: "P", value: 4 },
  { label: "F", value: 0 },
];

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SRM CGPA Calculator | SRM IST Official Grading Tool",
  description: "Calculate your SRM IST CGPA accurately using the Regulation 2018/2021 grading system. Optimized for Kattankulathur, Ramapuram campus.",
};

export default function SRMCalculator() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <SchemaMarkup 
        type="WebApplication"
        name="SRM CGPA Calculator"
        description="Calculate your CGPA for SRM IST (Kattankulathur, Ramapuram, Delhi-NCR) using the official grading scale."
        applicationCategory="EducationalApplication"
        operatingSystem="Any"
      />

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
          SRM CGPA Calculator
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          The official CGPA calculator for SRM University IST students. Optimized for Regulation 2018 and Regulation 2021.
        </p>
      </div>

      <GradeCalculator university="SRM University" grades={SRM_GRADES} />

      <SEOContent title="How to Calculate SRM CGPA?">
        <p>
          SRM Institute of Science and Technology (SRM IST) follows a Choice Based Credit System (CBCS). The CGPA is calculated based on the letter grades obtained by a student in each course.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">SRM Grading Scale</h3>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <li className="bg-white p-3 border rounded-lg text-center font-bold">O: 10</li>
          <li className="bg-white p-3 border rounded-lg text-center font-bold">A+: 9</li>
          <li className="bg-white p-3 border rounded-lg text-center font-bold">A: 8</li>
          <li className="bg-white p-3 border rounded-lg text-center font-bold">B+: 7</li>
          <li className="bg-white p-3 border rounded-lg text-center font-bold">B: 6</li>
          <li className="bg-white p-3 border rounded-lg text-center font-bold">C: 5</li>
          <li className="bg-white p-3 border rounded-lg text-center font-bold">P: 4</li>
          <li className="bg-white p-3 border rounded-lg text-center font-bold">F: 0</li>
        </ul>
        <h3 className="text-xl font-bold mt-6 mb-2">Calculation Formula</h3>
        <p>Your GPA for a semester is calculated as:</p>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm">
          GPA = Σ (Ci × Gi) / Σ Ci
        </div>
        <p className="mt-4 italic">Where Ci is the credit for the i-th course and Gi is the grade point obtained.</p>
      </SEOContent>
    </div>
  );
}
