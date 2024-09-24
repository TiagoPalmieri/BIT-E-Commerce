import { Fragment } from "react"
import '../styles/uploadProduct.css'


export default function UploadProduct(){
    return(
        <Fragment>
            <div className="mitad mitad-arriba"></div>
                <div className="mitad mitad-abajo"></div>
                <h1>¡Hola! Antes que nada contanos,
                ¿qué vas a publicar?</h1>
                <div className="container">
                        <div className="card card-product">
                            <a href="form.html">
                                <img src="src/smartphone_24dp_282826_FILL0_wght400_GRAD0_opsz24.svg" alt=""></img>
                                <div className="titles">
                                    <h4>Productos</h4>  
                                </div>
                            </a>
                        </div>
                        <div className="card card-vehicles">
                            <a href="form.html">
                                <img src="src/directions_car_24dp_282826_FILL0_wght400_GRAD0_opsz24.svg" alt=""></img>
                                <div className="titles">
                                    <h4>Vehiculos</h4>
                                </div>
                            </a>
                        </div>
                        <div className="card card-furniture">
                            <a href="form.html">
                                <img src="src/home_24dp_282826_FILL0_wght400_GRAD0_opsz24.svg" alt=""></img>
                                <div className="titles">
                                    <h4>Inmuebles</h4>
                                </div>
                            </a>
                        </div>
                </div>
        </Fragment>
    )
}