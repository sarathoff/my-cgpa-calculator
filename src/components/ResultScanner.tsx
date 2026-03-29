"use client";

import React, { useState } from "react";
import { Upload, FileText, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { extractTextFromPDF } from "@/lib/pdf-parser";
import { matchGrades, ExtractedSubject } from "@/lib/grade-matcher";

interface ResultScannerProps {
  university: string;
  onScanComplete: (subjects: ExtractedSubject[]) => void;
}

export default function ResultScanner({ university, onScanComplete }: ResultScannerProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setStatus("error");
      setError("Please upload a PDF file.");
      return;
    }

    setIsScanning(true);
    setStatus("loading");
    setError(null);

    try {
      const text = await extractTextFromPDF(file);
      const matched = matchGrades(text, university);
      
      if (matched.length > 0) {
        onScanComplete(matched);
        setStatus("success");
      } else {
        setStatus("error");
        setError("Could not extract any grades. Please enter manually.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Error parsing PDF. Please try another file.");
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="mb-8 p-6 bg-primary-50/50 rounded-2xl border border-dashed border-primary-200">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-1">
            <FileText className="text-primary-600" size={20} />
            Smart Result Scanner
          </h3>
          <p className="text-sm text-slate-500">
            Upload your official mark sheet (PDF) to automatically fill in your grades and credits. No data is stored or sent to any server.
          </p>
        </div>

        <div className="relative">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileUpload}
            disabled={isScanning}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          />
          <button
            disabled={isScanning}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all shadow-sm ${
              status === "loading"
                ? "bg-primary-100 text-primary-400"
                : status === "success"
                ? "bg-green-600 text-white"
                : "bg-primary-600 text-white hover:bg-primary-700 active:scale-95"
            }`}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Scanning...
              </>
            ) : status === "success" ? (
              <>
                <CheckCircle2 size={20} />
                Scanned Successfully!
              </>
            ) : (
              <>
                <Upload size={20} />
                Upload PDF
              </>
            )}
          </button>
        </div>
      </div>

      {status === "error" && (
        <div className="mt-4 flex items-center gap-2 text-sm text-red-600 animate-in slide-in-from-top-1 duration-200">
          <AlertCircle size={16} />
          {error}
        </div>
      )}
      
      {status === "success" && (
        <div className="mt-4 text-xs text-green-600/80 font-medium">
          Automatically matched subjects found. Review them below.
        </div>
      )}
    </div>
  );
}
