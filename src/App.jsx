import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";

// Attio Pages
import AttioAppShell from "@/projects/attio/pages/AppShell/Page";
import AttioTasksEmpty from "@/projects/attio/pages/TasksEmpty/Page";
import AttioTasksWithItems from "@/projects/attio/pages/TasksWithItems/Page";
import AttioOnboardingStep1 from "@/projects/attio/pages/OnboardingStep1/Page";
import AttioOnboardingStep2 from "@/projects/attio/pages/OnboardingStep2/Page";
import AttioOnboardingStep3 from "@/projects/attio/pages/OnboardingStep3/Page";
import AttioConvertChoosePlan from "@/projects/attio/pages/ConvertChoosePlan/Page";
import AttioConvertExtras from "@/projects/attio/pages/ConvertExtras/Page";
import AttioConvertSummary from "@/projects/attio/pages/ConvertSummary/Page";   
import AttioTrialEnded from "@/projects/attio/pages/TrialEnded/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Attio Project Routes */}
        <Route path="/attio" element={<AttioAppShell />} />
        <Route path="/attio/app-shell" element={<AttioAppShell />} />
        <Route path="/attio/tasks-empty" element={<AttioTasksEmpty />} />
        <Route path="/attio/tasks-with-items" element={<AttioTasksWithItems />} />

        <Route path="/attio/onboarding-1" element={<AttioOnboardingStep1 />} />
        <Route path="/attio/onboarding-2" element={<AttioOnboardingStep2 />} />
        <Route path="/attio/onboarding-3" element={<AttioOnboardingStep3 />} />

        <Route path="/attio/convert-choose-plan" element={<AttioConvertChoosePlan />} />
        <Route path="/attio/convert-extras" element={<AttioConvertExtras />} />
        <Route path="/attio/convert-summary" element={<AttioConvertSummary />} />

        <Route path="/attio/trial-ended" element={<AttioTrialEnded />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
