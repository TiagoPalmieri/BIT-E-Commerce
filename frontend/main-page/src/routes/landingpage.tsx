import { Fragment } from "react/jsx-runtime"
import '../styles/landingpage.css'
import frame from '../assets/Frame 5.png'
import secframe from '../assets/Frame 6.png'
import macbook from '../assets/macbook.png'

export default function LandingPage(){
    return(
        <Fragment>
    <div className="blob3"></div>
    <div className="blob4"></div>
    <div className="container">
        <div className="presentation">
            <div className="blob1"></div> 
            <img className="mac-bit" src={macbook}></img>
            <div className="context">
                <p>BIT! es un e-commerce que redefine la experiencia de compra en línea con su enfoque innovador y minimalista.</p>
            </div>
        </div>
        <div className="buttons">
            <a href="#">SIGN UP</a>
            <a href="#">SIGN IN</a>
        </div>
        <div className="banners-cont">
            <div className="banner">
                <img className="firstbanner" src={frame}></img>
            </div>
            <div className="banner">
                <img className="secbanner" src={secframe}></img>
            </div>
        </div>
    </div>  
    </Fragment>
    )
}