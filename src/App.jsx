import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Auth from "@/projects/folk/pages/Auth/Page";
import AuthEmailLogin from "@/projects/folk/pages/AuthEmailLogin/Page";
import AuthEmailSent from "@/projects/folk/pages/AuthEmailSent/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/email-login" element={<AuthEmailLogin />} />
        <Route path="/auth/email-sent" element={<AuthEmailSent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
