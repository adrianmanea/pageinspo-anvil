import { Link } from "react-router-dom";

export default function Home() {
  const projects = [
    {
      title: "Folk",
      description: "CRM for the next generation",
      color: "bg-pink-500",
      letter: "F",
      links: [
        { name: "Login Page", path: "/auth" },
        { name: "Email Login Page", path: "/auth/email-login" },
        { name: "Email Sent Page", path: "/auth/email-sent" },
        { name: "Contacts Shell", path: "/contacts-shell" },
        { name: "Search Contacts", path: "/search-contacts" },
        {
          name: "Dashboard Leads",
          path: "/dashboard-leads",
        },
        {
          name: "Step 1 Onboarding Welcome",
          path: "/step-1-onboarding-welcome",
        },
        {
          name: "Step 2 Onboarding Tell About Yourself",
          path: "/step-2-onboarding-tell-about-yourself",
        },
        {
          name: "Step 3 Onboarding Connect Accounts",
          path: "/step-3-onboarding-connect-accounts",
        },
        {
          name: "Step 4 Onboarding Capture",
          path: "/step-4-onboarding-capture",
        },
        {
          name: "Notifications Empty State",
          path: "/notifications/empty-state",
        },
        {
          name: "Notifications Open",
          path: "/notifications/open",
        },
        {
          name: "Settings Shell",
          path: "/settings-shell",
        },
        {
          name: "Settings Profile",
          path: "/settings-profile",
        },
        {
          name: "Settings Notifications",
          path: "/settings-notifications",
        },
        {
          name: "Settings Sessions",
          path: "/settings-sessions",
        },
        {
          name: "Settings API",
          path: "/settings-api",
        },
        {
          name: "Settings Workspace",
          path: "/settings-workspace",
        },
        {
          name: "Settings Members",
          path: "/settings-members",
        },
        {
          name: "Settings Security",
          path: "/settings-security",
        },
        {
          name: "Settings Plans",
          path: "/settings-plans",
        },
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
