import footerStyles from "./footerStyles.module.css"

import rain_px from "../assets/img/rain-pixel.png"
import lasswell_px from "../assets/img/laswell-pixel.png"
import fina_px from "../assets/img/fina-pixel.png"
import monster_px from "../assets/img/monster-px.png"
import monster1_px from "../assets/img/monster1-px.png"

function Footer () {
    const char_px = [rain_px, lasswell_px, fina_px, monster_px, monster1_px];

    return (
        <div className={footerStyles.container}>
            {
                char_px.map(
                    (img, index) => (
                        <img src={img} key={index} className={img}/>
                    )
                )
            }
        </div>
    );
}

export default Footer;