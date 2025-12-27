import type {JSX} from "react";
import {useState, useRef} from "react";
import Dramatic from "../Dramatic/Dramatic.tsx";

import characterStyles from "./characterStyles.module.css"

import rainVid from "../assets/video/rain-cg.mp4"
import lasswellVid from "../assets/video/Lasswell-cg.mp4"
import finaVid from "../assets/video/fina-cg.mp4"

import rainImg from "../assets/img/rain.png"
import lasswellImg from "../assets/img/lasswell.png"
import finaImg from "../assets/img/fina.png"

function Character() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const handleStart = (index: number) => {
        setActiveIndex(index);

        videoRefs.current.forEach((video, i) => {
            if (video) {
                if (i === index) {
                    video.muted = false;
                    video.currentTime = 0;
                    video.play();
                } else {
                    video.pause();
                }
            }
        });
    };

    const cg: string[] = [rainVid, lasswellVid, finaVid];
    const char: string[] = [rainImg, lasswellImg, finaImg];

    const cgs: JSX.Element[] = cg.map(
        (cgVid, index) => {
            return <video
                key={index}
                ref={(el) => {videoRefs.current[index] = el}}
                disablePictureInPicture
                loop
                playsInline
                muted
                style={{display: activeIndex === index ? "block" : "none"}}
                className={characterStyles.video}
            >
                <source src={cgVid} type="video/mp4"/>
            </video>
        }
    )

    const chars: JSX.Element[] = char.map((charImg, index) => {
            return <img
                key={index}
                src={charImg}
                onClick={() => handleStart(index)}
                className={characterStyles[`charImg${index}`]}
            />
        }
    )

    return (
        <div className={characterStyles.container}>
            <h1 className="font-gold">Main Characters</h1>

            <div className={characterStyles.content}>
                {cgs}

                <div className={characterStyles.selectChar}>
                    {chars}
                </div>
            </div>

            <Dramatic />
        </div>
    );
}

export default Character;