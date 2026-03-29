export default function Footer() {
  return (
    <footer className="border-t py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">MyCGPACalc</h3>
            <p className="text-slate-600 text-sm max-w-sm">
              The fastest and most accurate CGPA calculator for university students. 
              Built for speed and optimized for mobile users.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="/cgpa-to-percentage" className="hover:text-primary-600">CGPA to Percentage</a></li>
              <li><a href="/percentage-to-cgpa" className="hover:text-primary-600">Percentage to CGPA</a></li>
              <li><a href="/sgpa-to-cgpa" className="hover:text-primary-600">SGPA to CGPA</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">University</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="/university/srm-cgpa-calculator" className="hover:text-primary-600">SRM University</a></li>
              <li><a href="/university/vit-cgpa-calculator" className="hover:text-primary-600">VIT University</a></li>
              <li><a href="/university/vtu-cgpa-calculator" className="hover:text-primary-600">VTU University</a></li>
              <li><a href="/university/anna-university-reg-2023-cgpa-calculator" className="hover:text-primary-600">Anna University</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} MyCGPACalc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
