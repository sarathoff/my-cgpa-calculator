import { Metadata } from "next";
import SEOContent from "@/components/SEOContent";
import SchemaMarkup from "@/components/SchemaMarkup";
import CGPAToPercentageClient from "@/components/CGPAToPercentageClient";

export const metadata: Metadata = {
  title: "CGPA to Percentage Calculator | Official Conversion Tool",
  description: "Easily convert your CGPA to percentage using the standard 9.5 multiplier. Accurate and fast conversion for all university students.",
};

export default function CGPAToPercentage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <SchemaMarkup 
        type="WebApplication"
        name="CGPA to Percentage Calculator"
        description="Convert your CGPA to percentage easily using the official conversion formula."
        applicationCategory="EducationalApplication"
        operatingSystem="Any"
      />

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
          CGPA to Percentage Calculator
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Convert your Cumulative Grade Point Average (CGPA) on a 10-point scale into a Percentage instantly.
        </p>
      </div>

      <CGPAToPercentageClient />

      <SEOContent title="How to Calculate Percentage from CGPA?">
        <p>
          Converting CGPA to percentage is a common requirement for higher education applications and job placements. Most Indian universities follow a standard conversion factor.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">The Standard Formula</h3>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm overflow-x-auto">
          Percentage (%) = CGPA × 9.5
        </div>
        <p className="mt-4">
          For example, if your CGPA is 8.0, your percentage would be:
        </p>
        <div className="bg-primary-50/50 p-4 rounded-xl border border-primary-100 text-sm italic">
          8.0 × 9.5 = 76%
        </div>
        <p className="mt-4">
          Note: While 9.5 is the most common multiplier used by CBSE and many major universities, some institutions may use 10.0 or other specific scales. Always check your university's official conversion certificate.
        </p>
      </SEOContent>
    </div>
  );
}
