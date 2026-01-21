import { Routes, Route, Navigate, Link } from "react-router-dom";
import DashboardShell from "./DashboardShell";
import ContactsView from "./ContactsView";

export default function BrevoApp() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">
              Brevo Project Components
            </h1>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Link
                  to="shell"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Dashboard Shell
                </Link>
              </li>
              <li>
                <Link
                  to="contacts"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Contacts View (Standalone)
                </Link>
              </li>
            </ul>
          </div>
        }
      />
      <Route path="shell" element={<DashboardShell />} />
      <Route path="contacts" element={<ContactsView />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
