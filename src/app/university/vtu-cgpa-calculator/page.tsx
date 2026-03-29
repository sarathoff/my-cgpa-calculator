import GradeCalculator from "@/components/GradeCalculator";
import SEOContent from "@/components/SEOContent";
import SchemaMarkup from "@/components/SchemaMarkup";

const VTU_GRADES = [
  { label: "S+", value: 10 },
  { label: "S", value: 9 },
  { label: "A", value: 8 },
  { label: "B", value: 7 },
  { label: "C", value: 6 },
  { label: "D", value: 5 },
  { label: "E", value: 4 },
  { label: "F", value: 0 },
];

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VTU CGPA Calculator | VTU CBCS Grading System",
  description: "Calculate your VTU CGPA easily. Dedicated tool for VTU Choice Based Credit System (CBCS) engineering students in Karnataka.",
};

export default function VTUCalculator() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <SchemaMarkup 
        type="WebApplication"
        name="VTU CGPA Calculator"
        description="Calculate your CGPA for Visvesvaraya Technological University (VTU) using the CBCS grading system."
        applicationCategory="EducationalApplication"
        operatingSystem="Any"
      />

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
          VTU CGPA Calculator
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          The best CGPA calculator for VTU Choice Based Credit System (CBCS) students across all engineering colleges in Karnataka.
        </p>
      </div>

      <GradeCalculator university="VTU" grades={VTU_GRADES} />

      <SEOContent title="How to Calculate VTU CGPA?">
        <p>
          VTU follows the Choice Based Credit System (CBCS) where students are awarded SGPA at the end of every semester and CGPA at the end of the program.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">VTU Grading System</h3>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <li className="bg-white p-3 border rounded-lg text-center font-bold">S+: 10</li>
          <li className="bg-white p-3 border rounded-lg text-center font-bold">S: 9</li>
          <li className="bg-white p-3 border rounded-lg text-center font-bold">A: 8</li>
          <li className="bg-white p-3 border rounded-lg text-center font-bold">B: 7</li>
          <li className="bg-white p-3 border rounded-lg text-center font-bold">C: 6</li>
          <li className="bg-white p-3 border rounded-lg text-center font-bold">D: 5</li>
          <li className="bg-white p-3 border rounded-lg text-center font-bold">E: 4</li>
          <li className="bg-white p-3 border rounded-lg text-center font-bold">F: 0</li>
        </ul>
        <h3 className="text-xl font-bold mt-6 mb-2">Passing Criteria</h3>
        <p>
          Students must secure a minimum E grade in each subject to pass. Our calculator helps you track your progress accurately.
        </p>
      </SEOContent>
    </div>
  );
}
