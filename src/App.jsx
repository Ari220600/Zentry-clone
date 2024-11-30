import React from "react";
import Hero from "./components/Hero";
import "./index.css";
import About from "./components/About";
import Features from "./components/Features";
import NavBar from "./components/Navbar";
import Contact from "./components/Contact";
import ThreeSectionScroll from "./components/ThreeSectionScroll";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden scroll-smooth">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <ThreeSectionScroll />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
