import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-2">
            Anvil
          </h1>
          <p className="text-lg text-slate-600">The Workbench for PageInspo</p>
        </header>

        <section>
          <h2 className="text-xl font-semibold mb-6">Active Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card: Brevo */}
            <Link to="/projects/brevo" className="block group">
              <div className="border border-slate-200 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 bg-indigo-500 rounded-lg mb-4 flex items-center justify-center text-white font-bold">
                  B
                </div>
                <h3 className="text-lg font-medium group-hover:text-indigo-600 transition-colors">
                  Brevo
                </h3>
                <p className="text-sm text-slate-500 mt-2">Brevo</p>
              </div>
            </Link>
            <Link to="/projects/attio" className="block group">
              <div className="border border-slate-200 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 bg-indigo-500 rounded-lg mb-4 flex items-center justify-center text-white font-bold">
                  G
                </div>
                <h3 className="text-lg font-medium group-hover:text-indigo-600 transition-colors">
                  Grapho
                </h3>
                <p className="text-sm text-slate-500 mt-2">Grapho</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
