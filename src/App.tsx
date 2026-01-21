import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";

import BrevoApp from "@/projects/brevo/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Project Routes */}
        <Route path="/projects/brevo/*" element={<BrevoApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
