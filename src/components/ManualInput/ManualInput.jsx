import "./ManualInput.css";
import Face from "../Face/Face";

function ManualInput({
    cubeState,
    setCubeState,
    selectedColor,
    resetCube
}) {

    const middleFaces = ["L", "F", "R", "B"];

    return (
        <section className="manual-input glass-card">

            <h2>Manual Input</h2>

            <div className="cube-net">

                <Face
                    title="U"
                    stickers={cubeState.U}
                    cubeState={cubeState}
                    setCubeState={setCubeState}
                    selectedColor={selectedColor}
                />

                <div className="middle-row">

                    {middleFaces.map((face) => (
                        <Face
                            key={face}
                            title={face}
                            stickers={cubeState[face]}
                            cubeState={cubeState}
                            setCubeState={setCubeState}
                            selectedColor={selectedColor}
                        />
                    ))}

                </div>

                <Face
                    title="D"
                    stickers={cubeState.D}
                    cubeState={cubeState}
                    setCubeState={setCubeState}
                    selectedColor={selectedColor}
                />

            </div>

            <button
                className="reset-btn"
                onClick={resetCube}
            >
                Reset Cube
            </button>

        </section>
    );
}

export default ManualInput;