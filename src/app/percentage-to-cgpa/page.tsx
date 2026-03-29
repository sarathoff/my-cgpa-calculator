import { Metadata } from "next";
import SEOContent from "@/components/SEOContent";
import SchemaMarkup from "@/components/SchemaMarkup";
import PercentageToCGPAClient from "@/components/PercentageToCGPAClient";

export const metadata: Metadata = {
  title: "Percentage to CGPA Calculator | Standard Conversion Tool",
  description: "Convert your percentage to CGPA on a 10-point scale instantly. Supports all major Indian universities and boards.",
};

export default function PercentageToCGPA() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <SchemaMarkup 
        type="WebApplication"
        name="Percentage to CGPA Calculator"
        description="Convert your percentage to CGPA easily using the standard conversion factor."
        applicationCategory="EducationalApplication"
        operatingSystem="Any"
      />

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
          Percentage to CGPA Calculator
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Easily convert your total percentage score into a Cumulative Grade Point Average (CGPA) on a 10-point scale.
        </p>
      </div>

      <PercentageToCGPAClient />

      <SEOContent title="How to Calculate CGPA from Percentage?">
        <p>
          Calculating CGPA from your percentage is straightforward when using the standard conversion factor. Most educational boards in India use the 9.5 multiplier for this purpose.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">The Standard Formula</h3>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm overflow-x-auto">
          CGPA = Percentage (%) / 9.5
        </div>
        <p className="mt-4">
          For example, if your percentage is 76%, your CGPA would be:
        </p>
        <div className="bg-primary-50/50 p-4 rounded-xl border border-primary-100 text-sm italic">
          76 / 9.5 = 8.0
        </div>
        <p className="mt-4">
          This calculator assumes a linear conversion on the standard 9.5 scale. Please verify with your institute if they follow a different grade mapping table, as some universities use non-linear methods.
        </p>
      </SEOContent>
    </div>
  );
}
