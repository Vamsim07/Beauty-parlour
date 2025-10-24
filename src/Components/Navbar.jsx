import { Link } from "react-router-dom";

function Navbar() {

    return(<>
    <div className="container">
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="navbar">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="works" className="nav-link">Works</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    </>);
}
export default Navbar;