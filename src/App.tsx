import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Stats from "./pages/Stats";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-dvh bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Skills />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

