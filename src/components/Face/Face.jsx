import "./Face.css";

function Face({
    title,
    stickers,
    cubeState,
    setCubeState,
    selectedColor
}) {

    function handleStickerClick(index) {
        const updatedFace = [...stickers];
        updatedFace[index] = selectedColor;

        setCubeState({
            ...cubeState,
            [title]: updatedFace
        });
    }

    return (
        <div className="face-card">

            <h3>{title}</h3>

            <div className="face-grid">

                {stickers.map((stickerColor, index) => (
                    <div
                        key={index}
                        className="sticker"
                        style={{ backgroundColor: stickerColor }}
                        onClick={() => handleStickerClick(index)}
                    />
                ))}

            </div>

        </div>
    );
}

export default Face;