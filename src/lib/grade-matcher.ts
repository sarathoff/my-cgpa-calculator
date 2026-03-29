export interface ExtractedSubject {
  grade: string;
  credits: string;
}

export function matchGrades(text: string, university: string): ExtractedSubject[] {
  const subjects: ExtractedSubject[] = [];
  
  // Normalize text: remove multiple spaces, handle line breaks
  const normalizedText = text.replace(/\s+/g, ' ');

  // General pattern for Grade and Credit
  // Looks for common patterns like "3.0 credit A" or "Grade: O Credits: 4"
  // This is a default heuristic
  
  let patterns: RegExp[] = [];

  if (university.includes("SRM")) {
    // SRM Pattern: CourseCode CourseTitle Credits Grade
    // Example: 18CSC101J Object Oriented Programming 4 A+
    patterns = [
      /([A-Z0-9]{5,}\s+[A-Za-z\s&-]+)\s+(\d+)\s+([O|A\+|A|B\+|B|C|P|F])/g
    ];
  } else if (university.includes("VIT")) {
    // VIT Pattern: CourseCode CourseTitle Credits Grade
    // Example: CSE1001 Digital Logic 4 S
    patterns = [
      /([A-Z]{3,}\d{4})\s+[A-Za-z\s&-]+\s+(\d+)\s+([S|A|B|C|D|E|F])/g
    ];
  } else if (university.includes("VTU") || university.includes("Anna")) {
    // VTU/Anna Pattern: SubjectCode SubjectName Credits Grade
    patterns = [
      /([A-Z0-9]{6,})\s+[A-Za-z\s&-]+\s+(\d+)\s+([S\+]|S|A|B|C|D|E|F|O|A\+)/g
    ];
  } else {
    // Fallback: Just look for Grade followed by credits or vice versa
    patterns = [
      /Grade[:\s]+([O|A\+|A|B\+|B|C|P|F|S|E|D])[\s]+Credits[:\s]+(\d+)/gi,
      /(\d+)[\s]+Credits[\s]+Grade[:\s]+([O|A\+|A|B\+|B|C|P|F|S|E|D])/gi,
      /SGPA[:\s]+(\d+\.\d+)[\s]+Credits[:\s]+(\d+)/gi,
      /Credits[:\s]+(\d+)[\s]+SGPA[:\s]+(\d+\.\d+)/gi
    ];
  }

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(normalizedText)) !== null) {
      if (match.length >= 4) {
        subjects.push({
          credits: match[2],
          grade: match[3]
        });
      } else if (match.length === 3) {
        const val1 = match[1];
        const val2 = match[2];
        // If it was an SGPA match, we'll return it as a "grade" label for simplicity
        // The component will handle the conversion back to number
        if (!isNaN(parseFloat(val1)) && val1.includes('.')) {
          subjects.push({ grade: val1, credits: val2 });
        } else if (!isNaN(parseFloat(val2)) && val2.includes('.')) {
          subjects.push({ grade: val2, credits: val1 });
        } else if (!isNaN(parseInt(val1))) {
          subjects.push({ credits: val1, grade: val2 });
        } else {
          subjects.push({ credits: val2, grade: val1 });
        }
      }
    }
  }

  // Remove duplicates and filter out noise
  return subjects.filter(s => s.grade && s.credits);
}
