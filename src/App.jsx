import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Auth from "@/projects/folk/pages/Auth/Page";
import AuthEmailLogin from "@/projects/folk/pages/AuthEmailLogin/Page";
import AuthEmailSent from "@/projects/folk/pages/AuthEmailSent/Page";
import ContactsShell from "@/projects/folk/pages/ContactsShell/Page";
import SearchContacts from "@/projects/folk/pages/SearchContacts/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/email-login" element={<AuthEmailLogin />} />
        <Route path="/auth/email-sent" element={<AuthEmailSent />} />
        <Route path="/contacts-shell" element={<ContactsShell />} />
        <Route path="/search-contacts" element={<SearchContacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
