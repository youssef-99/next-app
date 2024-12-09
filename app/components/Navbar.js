import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/" className="navbar-brand">
          MyApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/users" className="nav-link">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
