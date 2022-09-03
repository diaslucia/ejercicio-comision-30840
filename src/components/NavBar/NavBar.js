import "./NavBar.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav">
            <Link to="/"><img className="logo" src={Logo} alt="logo blockbuster 2.0"/></Link>
            <ul className="nav_ulist">
                <Link className="nav_link nav_list" to="/">Home</Link>
                <li className="nav_list_line"><span/></li>
                <li className="nav_list">Movies</li>
                <li className="nav_list_line"><span/></li>
                <li className="nav_list">Series</li>
                <li className="nav_list_line"><span/></li>
                <li className="nav_list">FAQ</li>
            </ul>
        </nav>
    );
}

export default NavBar;