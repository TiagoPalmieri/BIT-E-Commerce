import { Fragment } from "react/jsx-runtime"
import '../styles/landingpage.css'

export default function LandingPage(){
    return(
        <Fragment>
    <div className="blob3"></div>
    <div className="blob4"></div>
    <div className="contenedor-general">
        <div className="contenedor-presentacion">
            <div className="blob1"></div> 
            <img className="mac-bit" src="../assets/MacBook Air (15 inch).png"></img>
            <div className="contenedor-parrafo">
                <p>BIT! es un e-commerce que redefine la experiencia de compra en línea con su enfoque innovador y minimalista.</p>
            </div>
        </div>
        <div className="contenedor-bottoms">
            <a href="#">SIGN UP</a>
            <a href="#">SIGN IN</a>
        </div>
        <div className="contenedor-final">
            <div className="contenedor-banner1">
                <img className="banner1" src="../assets/Frame 5.png"></img>
            </div>
            <div className="contenedor-banner2">
                <img className="banner2" src="../assets/Frame 6.png"></img>
            </div>
        </div>
    </div>  
    </Fragment>
    )
}