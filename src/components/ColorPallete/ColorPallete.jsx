import "./ColorPallete.css";

function ColorPallete({ selectedColor, setSelectedColor }) {

    const colors = [
        "white",
        "yellow",
        "red",
        "orange",
        "blue",
        "green"
    ];

    return (
        <section className="color-pallete glass-card">

            <h3>Color Palette</h3>

            <div className="palette">

                {colors.map((color) => (
                    <button
                        key={color}
                        className={`color-btn ${
                            selectedColor === color ? "active" : ""
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                    />
                ))}

            </div>

            <p>
                Selected:
                <strong> {selectedColor}</strong>
            </p>

        </section>
    );
}

export default ColorPallete;