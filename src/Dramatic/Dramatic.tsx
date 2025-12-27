import ffbeLogoImg from "../assets/img/ffbe-img-logo.png";
import dramaticStyles from "./dramaticStyles.module.css"

function Dramatic() {
    return (
        <>
            <h2 className={`${dramaticStyles.dramatic} + font-gold`}> But after a decade...</h2>
            <h2 className={`${dramaticStyles.dramatic} + font-gold`}> it's finally time to say goodbye.</h2>
            <img src={ffbeLogoImg} className={dramaticStyles.logo}/>
        </>
    );
}

export default Dramatic;