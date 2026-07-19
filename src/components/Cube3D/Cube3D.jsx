import "./Cube3D.css";

const colors = {
  front: "#ef4444",
  back: "#f97316",
  right: "#fde047",
  left: "#3b82f6",
  top: "#ffffff",
  bottom: "#22c55e",
};

function createFace(color) {
  return Array.from({ length: 9 }, (_, index) => (
    <div
      key={index}
      className="sticker"
      style={{ backgroundColor: color }}
    />
  ));
}

function Cube3D() {
  return (
    <div className="cube-scene">
      <div className="cube">

        <div className="face front">
          {createFace(colors.front)}
        </div>

        <div className="face back">
          {createFace(colors.back)}
        </div>

        <div className="face right">
          {createFace(colors.right)}
        </div>

        <div className="face left">
          {createFace(colors.left)}
        </div>

        <div className="face top">
          {createFace(colors.top)}
        </div>

        <div className="face bottom">
          {createFace(colors.bottom)}
        </div>

      </div>
    </div>
  );
}

export default Cube3D;