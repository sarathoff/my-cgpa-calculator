import GradeCalculator from "@/components/GradeCalculator";
import SEOContent from "@/components/SEOContent";
import SchemaMarkup from "@/components/SchemaMarkup";

const ANNA_GRADES = [
  { label: "O", value: 10 },
  { label: "A+", value: 9 },
  { label: "A", value: 8 },
  { label: "B+", value: 7 },
  { label: "B", value: 6 },
  { label: "C", value: 5 },
  { label: "F", value: 0 },
];

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anna University CGPA Calculator | Regulation 2023 & 2021",
  description: "Official Anna University CGPA calculator for Regulation 2023. Calculate your GPA and CGPA using the latest credit and grading system.",
};

export default function AnnaUniversityCalculator() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <SchemaMarkup 
        type="WebApplication"
        name="Anna University 2023 Reg CGPA Calculator"
        description="Official CGPA calculator for Anna University Regulation 2023. Calculate GPA and CGPA precisely."
        applicationCategory="EducationalApplication"
        operatingSystem="Any"
      />

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
          Anna University CGPA Calculator
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Tailored specifically for **Regulation 2023** and **Regulation 2021** students of Anna University.
        </p>
      </div>

      <GradeCalculator university="Anna University (Reg 2023)" grades={ANNA_GRADES} />

      <SEOContent title="How to Calculate Anna University Regulation 2023 CGPA?">
        <p>
          Anna University introduced Regulation 2023 with specific updates to the credit systems and grading scales. Understanding these is vital for accurate GPA calculation.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">Anna University (Reg 2023) Grading Scale</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="border p-3 text-left">Grade</th>
                <th className="border p-3 text-left">Description</th>
                <th className="border p-3 text-left">Grade Point</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3">O</td><td className="border p-3">Outstanding</td><td className="border p-3 font-bold">10</td></tr>
              <tr><td className="border p-3">A+</td><td className="border p-3">Excellent</td><td className="border p-3 font-bold">9</td></tr>
              <tr><td className="border p-3">A</td><td className="border p-3">Very Good</td><td className="border p-3 font-bold">8</td></tr>
              <tr><td className="border p-3">B+</td><td className="border p-3">Good</td><td className="border p-3 font-bold">7</td></tr>
              <tr><td className="border p-3">B</td><td className="border p-3">Average</td><td className="border p-3 font-bold">6</td></tr>
              <tr><td className="border p-3">C</td><td className="border p-3">Pass</td><td className="border p-3 font-bold">5</td></tr>
              <tr><td className="border p-3">F</td><td className="border p-3">Fail</td><td className="border p-3 font-bold">0</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-bold mt-6 mb-2">Key Formula</h3>
        <p>
          The Grade Point Average (GPA) is the ratio of the sum of the products of the number of credits of courses registered and the points corresponding to the grades scored in those courses, to the sum of the number of credits of all the courses registered.
        </p>
      </SEOContent>
    </div>
  );
}
