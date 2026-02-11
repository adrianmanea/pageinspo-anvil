import { Link } from "react-router-dom";

export default function Home() {
  const projects = [
    {
      title: "Attio",
      description: "CRM for the next generation",
      color: "bg-pink-500",
      letter: "A",
      links: [
        { name: "App Shell", path: "/attio" },
        { name: "Tasks (Empty)", path: "/attio/tasks-empty" },
        { name: "Tasks (With Items)", path: "/attio/tasks-with-items" },
        { name: "Onboarding Step 1", path: "/attio/onboarding-1" },
        { name: "Onboarding Step 2", path: "/attio/onboarding-2" },
        { name: "Onboarding Step 3", path: "/attio/onboarding-3" },
        { name: "Convert Choose Plan", path: "/attio/convert-choose-plan" },
        { name: "Convert Extras", path: "/attio/convert-extras" },
        { name: "Convert Summary", path: "/attio/convert-summary" },
        { name: "Trial Ended", path: "/attio/trial-ended" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-2">
            Anvil
          </h1>
          <p className="text-lg text-slate-600">The Workbench for PageInspo</p>
        </header>

        {projects.map((project) => (
          <section key={project.title} className="mb-12">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${project.color} text-sm font-bold text-white`}
              >
                {project.letter}
              </span>
              {project.title}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {project.links.map((link) => (
                <Link key={link.path} to={link.path} className="block group">
                  <div className="h-full border border-slate-200 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-medium group-hover:text-indigo-600 transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-sm text-slate-500 mt-2 font-mono text-xs">
                      {link.path}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
