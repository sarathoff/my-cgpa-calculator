import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary-600">
          MyCGPACalc
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary-600 transition-colors">
            CGPA Calculator
          </Link>
          <Link href="/cgpa-to-percentage" className="text-sm font-medium hover:text-primary-600 transition-colors">
            CGPA to %
          </Link>
          <Link href="/percentage-to-cgpa" className="text-sm font-medium hover:text-primary-600 transition-colors">
            % to CGPA
          </Link>
          <Link href="/sgpa-to-cgpa" className="text-sm font-medium hover:text-primary-600 transition-colors">
            SGPA to CGPA
          </Link>
        </nav>
        {/* Mobile menu would go here */}
      </div>
    </header>
  );
}
