import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1>RubExpert</h1>

        <button className="theme-btn" aria-label="Toggle Theme">
          🌙
        </button>
      </div>
    </nav>
  );
}

export default Navbar;