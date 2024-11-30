import React from "react";
import Hero from "./components/Hero";
import "./index.css";
import About from "./components/About";
import Features from "./components/Features";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* <NavBar /> */}
      <Hero />
      <About />
      <Features />
      {/* <Story /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </main>
  );
};

export default App;
