// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { lazy, Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Introduction from "./components/sections/Introduction";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
const Projects = lazy(() => import("./components/sections/Projects"));
const Contact = lazy(() => import("./components/sections/Contact"));
import LetterGlitch from "./components/LetterGlitch.jsx"; // <-- import

function App() {
  const navigate = useNavigate();
  const [showGlitch, setShowGlitch] = useState(false);

  useEffect(() => {
    // Expose a function to the window for the easter egg
    window.unlockCyber = () => {
      localStorage.setItem("easterEggUnlocked", "true"); // set flag
      setShowGlitch(true);
      setTimeout(() => {
        setShowGlitch(false);
        navigate("/toggle");
      }, 3500); // 3.5 seconds
    };

    // Console Easter Egg Hint
    console.log(
      "%cCurious minds dig deeper... 🔍",
      "color: #39ff14; font-size: 16px; font-family: monospace;"
    );
    setTimeout(() => {
      setTimeout(() => {
        console.log(
          "%cType %cunlockCyber()%c and press Enter",
          "color: gray; font-family: monospace;",
          "color: #39ff14; font-weight: bold; font-family: monospace;",
          "color: gray; font-family: monospace;"
        );
      }, 1000);
    }, 1000);

    // Optional: Clean up
    return () => {
      delete window.openEasterEgg;
    };
  }, [navigate]);

  return (
    <>
      {showGlitch && (
        <div className="fixed inset-0 z-[9999]">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </div>
      )}
      <Navbar />
      <main>
        {/* offset for fixed nav */}
        <Introduction />
        <About />
        <Skills />
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
      </main>
    </>
  );
}

export default App;
