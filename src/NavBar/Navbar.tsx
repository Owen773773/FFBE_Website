import logo_img from "../assets/img/logo.png";
import navbarStyles from "./Navbar.module.css"

function Navbar() {
    return (
        <div className={navbarStyles.navbar}>
            <img
                src={logo_img}
                className={navbarStyles.logo}
            />

            <div className={navbarStyles.navigation}>
                <span>Home</span>
                <span>Character</span>
                <span>About Me</span>
            </div>
        </div>
    );
}

export default Navbar;