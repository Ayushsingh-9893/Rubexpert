import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ManualInput from "./components/ManualInput/ManualInput";
import ColorPallete from "./components/ColorPallete/ColorPallete";
import Scanner from "./components/Scanner/Scanner";
import Solution from "./components/Solution/Solution";
import Footer from "./components/Footer/Footer";

import "./styles/App.css";

function App() {
  const [selectedColor, setSelectedColor] = useState("white");
  const [cubeState, setCubeState] = useState({
    U: Array(9).fill("white"),
    D: Array(9).fill("yellow"),
    F: Array(9).fill("green"),
    B: Array(9).fill("blue"),
    L: Array(9).fill("orange"),
    R: Array(9).fill("red"),
});
  return (
    <>
      <Navbar />

      <Hero />

      <main className="main-content">

        <section className="input-section">
          <ManualInput
              cubeState={cubeState}
              setCubeState={setCubeState}
              selectedColor={selectedColor}
          />
          <ColorPallete
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor} 
          />
        </section>
        <Scanner />
        <Solution />
        <Footer />

      </main>

    </>
  );
}

export default App;