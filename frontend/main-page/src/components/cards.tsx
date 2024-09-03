import product from '../assets/base.png';

function Card(){
    return(<div className="card-background">
        <div className="card-image">
            <img src={product}></img>
        </div>
        <div className="card-text">
            <p>JOYSTICK PlayStation 5 Dualshock</p>
        </div>
        <div className="card-info">
            <span className="material-symbols-outlined">
                star
            </span>
            <span className="material-symbols-outlined">
                star
            </span>
            <span className="material-symbols-outlined">
                star
            </span>
            <span className="material-symbols-outlined">
                star
            </span>
            <span className="material-symbols-outlined">
                star
            </span>
        </div>
        <div className="card-price">
            <p>$69.99</p>
            <p className="currency">USD</p>
        </div>
        <div className="card-shipping">
            <p>Free Shipping</p>
        </div>
    </div>);
}

export default Card;