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
                <img src={darkMode ? lightLogo : darkLogo} alt="logo" height="200px" width="200px" />
            </div>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#hamberger" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <i class="fa-solid fa-bars"></i>  
            </button>
            <div className="collapse navbar-collapse" id="hamberger">
                <ul className="navbar-nav ms-auto fw-bold fs-4 fst-italic">
                    <li className="nav-item">
                        <Link to="/" className="nav-link"><span className="text-danger">B</span>eauty Lounge</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about" className="nav-link"><span className="text-danger">O</span>ur Stoty</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="works" className="nav-link"><span className="text-danger">W</span>hat We Do</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link"><span className="text-danger">R</span>each Us</Link>
                    </li>
                    <div className="nav-item ms-4">
                        <button onClick={()=>setDarkMode(!darkMode)} className={`btn btn-lg ${darkMode ? "btn-light" : "btn-dark"}`}>
                            {darkMode ? (<>
                            <i class="fa-solid fa-sun"></i>
                            </>) :(<>
                            <i class="fa-regular fa-moon"></i>
                            </>)}
                        </button>
                    </div>
                </ul>
            </div>
        </nav>
    </div>
    </>);
}
export default Navbar;