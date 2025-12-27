import logo_img from "../assets/img/logo.png";
import navbarStyles from "./Navbar.module.css"

function Navbar() {
    function scrollToSection(id: string) {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }

    return (
        <div className={navbarStyles.navbar}>
            <img
                src={logo_img}
                className={navbarStyles.logo}
            />

            <div className={navbarStyles.navigation}>
                <span onClick={() => scrollToSection("home-section")}>Home</span>
                <span onClick={() => scrollToSection("game-section")}>Game</span>
                <span onClick={() => scrollToSection("character-section")}>Character</span>
                <span>About Me</span>
            </div>
        </div>
    );
}

export default Navbar;