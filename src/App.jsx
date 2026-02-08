import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";

// Attio Pages
import AttioAppShell from "@/projects/attio/pages/AppShell/Page";
import AttioTasksEmpty from "@/projects/attio/pages/TasksEmpty/Page";
import AttioTasksWithItems from "@/projects/attio/pages/TasksWithItems/Page";
import AttioOnboardingStep1 from "@/projects/attio/pages/OnboardingStep1/Page";
import AttioOnboardingStep2 from "@/projects/attio/pages/OnboardingStep2/Page";
import AttioOnboardingStep3 from "@/projects/attio/pages/OnboardingStep3/Page";
import AttioConvertPricing from "@/projects/attio/pages/ConvertPricing/Page";
import AttioConvertChoosePlan from "@/projects/attio/pages/ConvertChoosePlan/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        {/* Attio Project Routes */}
        <Route path="/attio" element={<AttioAppShell />} />
        <Route path="/attio/app-shell" element={<AttioAppShell />} />
        <Route path="/attio/tasks-empty" element={<AttioTasksEmpty />} />
        <Route path="/attio/tasks-with-items" element={<AttioTasksWithItems />} />

        <Route path="/attio/onboarding-1" element={<AttioOnboardingStep1 />} />
        <Route path="/attio/onboarding-2" element={<AttioOnboardingStep2 />} />
        <Route path="/attio/onboarding-3" element={<AttioOnboardingStep3 />} />

        <Route path="/attio/convert-pricing" element={<AttioConvertPricing />} />
        <Route path="/attio/convert-choose-plan" element={<AttioConvertChoosePlan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
