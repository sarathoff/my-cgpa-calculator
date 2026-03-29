export async function extractTextFromPDF(file: File): Promise<string> {
  if (typeof window === 'undefined') return "";

  try {
    // Import the main pdfjs-dist module
    // Version 3.11.174 is stable in Next.js
    const pdfjs = await import('pdfjs-dist');
    
    // Set up worker using CDN for convenience and stability
    if (!pdfjs.GlobalWorkerOptions.workerSrc) {
      pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;
    }

    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjs.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;
    let fullText = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      
      // textContent.items can contain either TextItem or TextMark
      // str is only on TextItem
      const pageText = textContent.items
        .map((item: any) => item.str || "")
        .join(" ");
      fullText += pageText + "\n";
    }

    return fullText;
  } catch (error) {
    console.error("PDF Parsing Error:", error);
    throw error;
  }
}
