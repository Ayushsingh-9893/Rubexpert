import "./Scanner.css";

function Scanner() {
  return (
    <section className="scanner glass-card">

      <h3>Camera Scanner</h3>

      <div className="scanner-content">

        <div className="camera-preview">
          Camera Preview
        </div>

        <div className="scanner-info">

          <button className="scan-btn">
            Start Camera
          </button>

          <p>
            Point your camera at each face of the cube.
            Follow the instructions to scan all six faces.
          </p>

          <div className="progress-list">

            <div>⚪ White</div>
            <div>🟡 Yellow</div>
            <div>🔴 Red</div>
            <div>🟠 Orange</div>
            <div>🔵 Blue</div>
            <div>🟢 Green</div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Scanner;