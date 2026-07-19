import "./ManualInput.css";
import Face from "../Face/Face";

function ManualInput({ selectedColor }) {
  return (
    <section className="manual-input glass-card">

      <h3>Manual Input</h3>

      <div className="cube-net">

            <Face title="U" color="white" selectedColor={selectedColor} />

        <div className="middle-row">
            <Face title="L" color="orange" selectedColor={selectedColor} />
            <Face title="F" color="green" selectedColor={selectedColor} />
            <Face title="R" color="red" selectedColor={selectedColor} />
            <Face title="B" color="blue" selectedColor={selectedColor} />
        </div>

        <Face title="D" color="yellow" selectedColor={selectedColor} />

</div>
    </section>
  );
}

export default ManualInput;