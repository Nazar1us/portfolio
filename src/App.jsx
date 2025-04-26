import "./App.css";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import LangingPage from "./pages/LandingPage";
import LandingLayout from "./components/landingPageComponents/LandingLayout";
import LandingPageContacts from "./components/landingPageComponents/LandingPageContacts/LandingPageContacts";
import Services from "./components/landingPageComponents/Services/Services";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/bridge" element={<LandingLayout />}>
          <Route index element={<LangingPage />} />
          <Route path="services" element={<Services />} />
          <Route path="contacts" element={<LandingPageContacts />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
