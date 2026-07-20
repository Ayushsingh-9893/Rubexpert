import "./Solution.css";
import { validateCube } from "../../utils/validateCube";
import { cubeToString } from "../../utils/cubeToString";  

function Solution({ cubeState }) {
  async function handleSolve() {
    console.log("Solve button clicked");
    
    const isValid = validateCube(cubeState);

    console.log("Validation:", isValid);

    if (!isValid) {
        alert("Invalid cube");
        return;
    }

console.log("About to send request");

    const cubeString = cubeToString(cubeState);
    console.log(cubeString);
    console.log(validateCube(cubeState));

    try {
        const response = await fetch("http://localhost:5000/solve", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cube: cubeString,
            }),
        });

        const data = await response.json();

        console.log(data);

        if (data.success) {
            alert(data.solution || "Cube is already solved!");
        } else {
            alert(data.error);
        }

    } catch (error) {
        console.error(error);
        alert("Could not connect to backend");
    }
}
  return (
    <section className="solution glass-card">

      <h3>Solution</h3>

      <div className="solution-box">
        <p>Your solution will appear here after scanning or entering the cube.</p>
      </div>

      <button className="solve-btn" onClick={handleSolve}>
          Solve Cube
      </button>

    </section>
  );
}

export default Solution;