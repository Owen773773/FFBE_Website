import advertisementVid1 from "../assets/video/ad1.mp4";
import advertisementVid2 from "../assets/video/ad2.mp4";
import advertisementVid3 from "../assets/video/ad3.mp4";
import ornament from "../assets/img/ornament-ads-vid.png"
import advertisementStyle from "./advertisementStyles.module.css"
import type {JSX} from "react";

function Advertisement() {
    const subtitle: string[] = [
        "An Epic Journey Begins Here",
        "Where Heroes Rise and Legends Are Born",
        "Enter a World of Endless Adventure"
    ];

    const content: string[] = [
        "Summon legendary heroes and uncover a story that spans worlds and destinies.",
        "Forge your party, master powerful abilities, and rise against overwhelming foes.",
        "Experience strategic battles, breathtaking visuals, and unforgettable moments."
    ];

    const adsVideo: string[] = [
        advertisementVid1, advertisementVid2, advertisementVid3
    ];

    const advertising: JSX.Element[] = subtitle.map(
        (subtitle, index) => {
            let left, right: JSX.Element;

            if (index % 2 === 0) { //left
                left =
                    <video
                        disablePictureInPicture
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={advertisementStyle.adVid}
                    >
                        <source src={adsVideo[index]} type="video/mp4" />
                    </video>;

                right =
                    <div className={advertisementStyle.adTitle}>
                        <h2 className="font-gold">{subtitle}</h2>
                        <p className="font-silver">{content[index]}</p>
                    </div>;
            }
            else {
                right =
                    <video
                        disablePictureInPicture
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={advertisementStyle.adVid}
                    >
                        <source src={adsVideo[index]} type="video/mp4" />
                    </video>;

                left =
                    <div className={advertisementStyle.adTitle}>
                        <h2 className="font-gold">{subtitle}</h2>
                        <p className="font-silver">{content[index]}</p>
                    </div>;
            }

            return (
                <div
                    key={index}
                    className={advertisementStyle.advertisement}
                >
                    {left}

                    <img
                        src={ornament}
                        className={(index % 2 === 0? advertisementStyle.ornament_left : advertisementStyle.ornament_right)}
                    />

                    {right}
                </div>
            );
        }
    )

    return(
        <div id="game-section" className={advertisementStyle.container}>
            <h1 className="font-gold">A WORLD BEYOND IMAGINATION</h1>

            {advertising}
        </div>
    );
}

export default Advertisement;