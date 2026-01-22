import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";

import BrevoApp from "@/projects/brevo/main";
import AttioApp from "@/projects/attio/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Project Routes */}
        <Route path="/projects/brevo/*" element={<BrevoApp />} />
        <Route path="/projects/attio/*" element={<AttioApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
