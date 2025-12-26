import homeStyle from "./homeStyles.module.css"
import goldBorder from "../assets/img/title-gold-border.png"
import wallpaper from "../assets/video/home-wallpaper.mp4"

function Home() {
    return (
        <div className={homeStyle.container}>
            <video disablePictureInPicture autoPlay muted loop playsInline className={homeStyle.bgVideo}>
                <source src={wallpaper} type="video/mp4" />
            </video>

            <h1 className="font-silver">FINAL FANTASY BRAVE EXVIUS</h1>

            <div className={homeStyle.border}>
                <img src={goldBorder} />
                <h2 className="font-gold">10<sup>th</sup> ANNIVERSARY</h2>
            </div>
        </div>
    );
}

export default Home;