import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";

import AttioApp from "@/projects/attio/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Project Routes */}
        <Route path="/projects/attio/*" element={<AttioApp />} />
        <Route path="/attio/*" element={<AttioApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
