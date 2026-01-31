import { Routes, Route, Navigate, Link } from "react-router-dom";
import OnboardingStep1Page from "./OnboardingStep1Page";
import OnboardingStep2Page from "./OnboardingStep2Page";
import OnboardingStep3Page from "./OnboardingStep3Page";
import TasksEmptyPage from './TasksEmptyPage'
import TasksWithItemsPage from './TasksWithItemsPage'

export default function AttioApp() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">
              Acme Project Components
            </h1>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Link
                  to="/attio/step1"
                  className="text-blue-600 hover:underline"
                >
                  Onboarding Step 1
                </Link>
              </li>
              <li>
                <Link
                  to="onboarding-step-2"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Onboarding Step 2
                </Link>
              </li>
              <li>
                <Link
                  to="onboarding-step-3"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Onboarding Step 3
                </Link>
              </li>
              <li>
                <Link to="/attio/tasks-empty" className="text-blue-600 hover:underline">
                  Tasks Empty Page
                </Link>
              </li>
              <li>
                <Link to="/attio/tasks-with-items" className="text-blue-600 hover:underline">
                  Tasks With Items Page
                </Link>
              </li>
            </ul>
          </div>
        }
      />
      <Route path="/attio/step1" element={<OnboardingStep1Page />} />
      <Route path="onboarding-step-2" element={<OnboardingStep2Page />} />
      <Route path="onboarding-step-3" element={<OnboardingStep3Page />} />
      <Route path="tasks-empty" element={<TasksEmptyPage />} />
      <Route path="tasks-with-items" element={<TasksWithItemsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
