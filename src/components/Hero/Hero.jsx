import "./Hero.css";
import Cube3D from "../Cube3D/Cube3D";

function Hero() {
  return (
    <section className="hero">

      <h2>Rubik's Cube Solver</h2>

      <p>
        Solve any Rubik's Cube using manual input or camera scanning.
      </p>

       <Cube3D />
      <div className="hero-buttons">
        <button>Solve Cube</button>
        <button>Scramble</button>
        <button>Reset</button>
        <button>Clear</button>
      </div>

      <p className="status">
        Status: Ready | Moves: 0
      </p>

    </section>
  );
}

export default Hero;