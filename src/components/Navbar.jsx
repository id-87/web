import {Link} from "react-router-dom";

function Navbar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/" className="navbar-logo">Movie App</Link>
            
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favouraites" className="nav-link">Favouraites</Link>
        </div>
    </nav>
}

export default Navbar