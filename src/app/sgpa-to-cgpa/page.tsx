import { Metadata } from "next";
import SEOContent from "@/components/SEOContent";
import SchemaMarkup from "@/components/SchemaMarkup";
import SGPAToCGPAClient from "@/components/SGPAToCGPAClient";

export const metadata: Metadata = {
  title: "SGPA to CGPA Calculator | Multi-Semester Tool",
  description: "Calculate your cumulative CGPA from semester SGPA and credits. Supports multiple semesters with easy add/remove features.",
};

export default function SGPAToCGPA() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <SchemaMarkup 
        type="WebApplication"
        name="SGPA to CGPA Calculator"
        description="Convert your semester-wise SGPA into a cumulative CGPA by providing your semester grade points and credits."
        applicationCategory="EducationalApplication"
        operatingSystem="Any"
      />

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
          SGPA to CGPA Calculator
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Calculate your Cumulative Grade Point Average (CGPA) from your SGPA scores across multiple semesters.
        </p>
      </div>

      <SGPAToCGPAClient />

      <SEOContent title="How to calculate CGPA from SGPA?">
        <p>
          Converting SGPA (Semester Grade Point Average) to CGPA (Cumulative Grade Point Average) is a process of finding the weighted average of your performance across all semesters.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">Step-by-Step Instructions</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Take the SGPA score for each individual semester.</li>
          <li>Find the total number of credits associated with each semester.</li>
          <li>Multiply each semester's SGPA by its total credits.</li>
          <li>Add all these products to get the Total Weighted Grade Points.</li>
          <li>Add up all the credits from all semesters for the Total Credits.</li>
          <li>Divide Total Weighted Grade Points by Total Credits to get your CGPA.</li>
        </ol>
        <div className="mt-8 bg-primary-50 p-6 rounded-2xl border border-primary-100">
          <p className="text-primary-900 font-semibold mb-2 italic">Note for some Universities:</p>
          <p className="text-sm">If your university gives equal weightage to all semesters regardless of credits, simply add all SGPA scores and divide by the number of semesters.</p>
        </div>
      </SEOContent>
    </div>
  );
}
