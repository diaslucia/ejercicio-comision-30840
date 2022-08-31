import "./NavBar.css";
import Logo from "../../assets/Logo.png";

const NavBar = () => {
    return (
        <nav className="nav">
            <img className="logo" src={Logo} alt="logo blockbuster 2.0"/>
            <ul className="nav_ulist">
                <li className="nav_list">Home</li>
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