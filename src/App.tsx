import Home from "./Home/Home.tsx";
import Navbar from "./NavBar/Navbar.tsx";
import Advertisement from "./Advertisement/Advertisement.tsx";
import Character from "./Character/Character.tsx";

function App() {
    return (
        <>
            <Navbar />

            <Home />
            <Advertisement />
            <Character />
        </>
    );
}

export default App
