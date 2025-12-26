import type {JSX} from "react";
import {useRef} from "react";

import characterStyles from "./characterStyles.module.css"
import wallpaper from "../assets/img/desktop-2_bg.jpg"

import rainVid from "../assets/video/rain-cg.mp4"

import rainImg from "../assets/img/rain.png"
import lasswellImg from "../assets/img/lasswell.png"
import finaImg from "../assets/img/fina.png"

function Character() {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleStart = () => {
        if (videoRef.current) {
            videoRef.current.play(); // Video akan jalan dengan suara karena dipicu klik
        }
    };

    const char: string[] = [
            rainImg,
            lasswellImg,
            finaImg
    ];

    const chars: JSX.Element[] = char.map(
        (charImg, index) => {
            return (
                <img
                    key={index}
                    src={charImg}
                    onClick={handleStart}
                    className={char[index]}
                />
            );
        }
    )

    return (
        <div className={characterStyles.container}>
            <img
                src={wallpaper}
                className={characterStyles.wallpaper}
            />

            <div className={characterStyles.content}>
                <video
                    ref={videoRef}
                    disablePictureInPicture
                    autoPlay
                    loop
                    playsInline
                    className={characterStyles.video}
                >
                    <source src={rainVid} type="video/mp4" />
                </video>;

                <div className={characterStyles.selectChar}>
                    {chars}
                </div>
            </div>
        </div>
    );
}

export default Character;