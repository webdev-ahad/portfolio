import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Stats from "./pages/Stats";
import Contact from "./pages/Contact";
import { routes } from "./routes";

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col bg-slate-950 text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.projects} element={<Project />} />
          <Route path={routes.skills} element={<Skills />} />
          <Route path={routes.highlights} element={<Stats />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path="*" element={<Navigate to={routes.home} replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
