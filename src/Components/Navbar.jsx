import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import darkLogo from "../assets/verse-black.png";
import lightLogo from "../assets/verse-white.png";


function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(()=>{
        if(darkMode){
            document.body.classList.add("bg-dark", "text-light");
            document.body.classList.remove("bg-light","text-dark");
        }
        else{
            document.body.classList.add("bg-light","text-dark");
            document.body.classList.remove("bg-dark","text-light");
        }
    },[darkMode]);

    return(<>
    <div className="container">
        <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
            <div className="navbar-brand">
                <img src={darkMode ? lightLogo : darkLogo} alt="logo" height="250px" width="250px" />
            </div>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#hamberger" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <i class="fa-solid fa-bars"></i>  
            </button>
            <div className="collapse navbar-collapse" id="hamberger">
                <ul className="navbar-nav ms-auto fw-bold">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Beauty Lounge</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about" className="nav-link">Our Stoty</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="works" className="nav-link">What We Do</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Reach Us</Link>
                    </li>
                    <li className="nav-item">
                        <button onClick={()=>setDarkMode(!darkMode)} className={`btn btn-sm ${darkMode ? "btn-light" : "btn-dark"}`}>
                            {darkMode ? (<>
                            <i class="fa-solid fa-sun"></i>
                            </>) :(<>
                            <i class="fa-regular fa-moon"></i>
                            </>)}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    </>);
}
export default Navbar;