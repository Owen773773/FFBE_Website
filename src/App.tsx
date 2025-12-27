import Home from "./Home/Home.tsx";
import Navbar from "./NavBar/Navbar.tsx";
import Advertisement from "./Advertisement/Advertisement.tsx";
import Character from "./Character/Character.tsx";
import Footer from "./Footer/Footer.tsx";

function App() {
    return (
        <>
            <Navbar />

            <Home />
            <Advertisement />
            <Character />

            <Footer />
        </>
    );
}

export default App
