import GradeCalculator from "@/components/GradeCalculator";
import SEOContent from "@/components/SEOContent";
import SchemaMarkup from "@/components/SchemaMarkup";

const VIT_GRADES = [
  { label: "S", value: 10 },
  { label: "A", value: 9 },
  { label: "B", value: 8 },
  { label: "C", value: 7 },
  { label: "D", value: 6 },
  { label: "E", value: 5 },
  { label: "F", value: 0 },
];

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIT CGPA Calculator | VIT Vellore & Chennai Grading Tool",
  description: "Accurate CGPA calculator for VIT University students. Supports all campuses and credit-based grading systems for B.Tech and other courses.",
};

export default function VITCalculator() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <SchemaMarkup 
        type="WebApplication"
        name="VIT CGPA Calculator"
        description="Calculate your CGPA for Vellore Institute of Technology (VIT University) using the official credit-based grading system."
        applicationCategory="EducationalApplication"
        operatingSystem="Any"
      />

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
          VIT CGPA Calculator
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Fast and precise CGPA calculator for VIT Vellore, Chennai, AP, and Bhopal campus students.
        </p>
      </div>

      <GradeCalculator university="VIT University" grades={VIT_GRADES} />

      <SEOContent title="How to Calculate VIT CGPA?">
        <p>
          VIT University uses a relative grading system where your grade depends on the overall class performance. However, for CGPA calculation, these letter grades are assigned fixed point values.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">VIT Grading Scale</h3>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <li className="bg-white p-3 border rounded-lg text-center font-bold">S: 10</li>
          <li className="bg-white p-3 border rounded-lg text-center font-bold">A: 9</li>
          <li className="bg-white p-3 border rounded-lg text-center font-bold">B: 8</li>
          <li className="bg-white p-3 border rounded-lg text-center font-bold">C: 7</li>
          <li className="bg-white p-3 border rounded-lg text-center font-bold">D: 6</li>
          <li className="bg-white p-3 border rounded-lg text-center font-bold">E: 5</li>
          <li className="bg-white p-3 border rounded-lg text-center font-bold">F: 0</li>
        </ul>
        <h3 className="text-xl font-bold mt-6 mb-2">Credits and GPA</h3>
        <p>
          Every subject in VIT has a certain number of credits. To get your GPA, the grade point of each subject is multiplied by its credits, summed up, and divided by the total credits of that semester.
        </p>
      </SEOContent>
    </div>
  );
}
