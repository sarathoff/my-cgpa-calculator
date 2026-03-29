import { Metadata } from "next";
import SEOContent from "@/components/SEOContent";
import SchemaMarkup from "@/components/SchemaMarkup";
import CGPACalculatorClient from "@/components/CGPACalculatorClient";

export const metadata: Metadata = {
  title: "CGPA Calculator | Calculate CGPA and Percentage Online",
  description: "Free and fast CGPA calculator for university students. Convert CGPA to percentage, SGPA to CGPA, and use university-specific calculators for SRM, VIT, VTU, and Anna University.",
};

export default function CGPACalculator() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <SchemaMarkup 
        type="WebApplication"
        name="Online CGPA Calculator"
        description="Fast and accurate CGPA calculator for university students. Calculate your cumulative grade point average across multiple semesters."
        applicationCategory="EducationalApplication"
        operatingSystem="Any"
      />

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
          CGPA Calculator
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Calculate your Cumulative Grade Point Average (CGPA) instantly by entering your SGPA and credits for each semester.
        </p>
      </div>

      <CGPACalculatorClient />

      <SEOContent title="How to Calculate CGPA?">
        <p>
          Cumulative Grade Point Average (CGPA) is a measure of a student's overall academic performance. It is calculated as the weighted average of the grade points obtained in all semesters.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">The Formula for CGPA</h3>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm overflow-x-auto">
          CGPA = (Σ (SGPA × Semester Credits)) / (Σ Total Credits)
        </div>
        <p className="mt-4">
          To calculate your CGPA manually, follow these steps:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Multiply each semester's SGPA with its respective total credits.</li>
          <li>Add all the resulting products together to get the total grade points.</li>
          <li>Add up the total number of credits across all semesters.</li>
          <li>Divide the total grade points by the total credits.</li>
        </ol>
      </SEOContent>
    </div>
  );
}
