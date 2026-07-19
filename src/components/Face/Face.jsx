import "./Face.css";
import { useState } from "react";

function Face({ title, color, selectedColor }) {

    const [stickers, setStickers] = useState(Array(9).fill(color));

    function handleStickerClick(index) {
        const newStickers = [...stickers];
        newStickers[index] = selectedColor;
        setStickers(newStickers);
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