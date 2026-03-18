import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatEmpty from "@/projects/sana-ai/pages/ChatEmpty/Page";
import ChatWithDocs from "@/projects/sana-ai/pages/ChatWithDocs/Page";
import AppShell from "@/projects/sana-ai/pages/AppShell/Page";
import ChatDocumentGenerated from "@/projects/sana-ai/pages/ChatDocumentGenerated/Page";
import ChatLoading from "@/projects/sana-ai/pages/ChatLoading/Page";
import ChatResponseSent from "@/projects/sana-ai/pages/ChatResponseSent/Page";
import Home from "@/pages/Home";
import Auth from "@/projects/sana-ai/pages/Auth/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat-empty" element={<ChatEmpty />} />
        <Route path="/chat-with-docs" element={<ChatWithDocs />} />
        <Route
          path="/chat-document-generated"
          element={<ChatDocumentGenerated />}
        />
        <Route path="/chat-loading" element={<ChatLoading />} />
        <Route path="/chat-response-sent" element={<ChatResponseSent />} />
        <Route path="/app-shell" element={<AppShell />} />
        <Route path="/sign-in-to-sana" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
