import "../styles/cards.css";
interface Props{
    product_name: string
    product_price: number
    product_image: string
}

function Card(props: Props){
    return(<div className="card-background">
        <div className="card-image">
            <img src={props.product_image}></img>
        </div>
        <div className="card-text">
            <p>{props.product_name}</p>
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
            <p>{props.product_price}</p>
            <p className="currency">USD</p>
        </div>
        <div className="card-shipping">
            <p>Free Shipping</p>
        </div>
    </div>);
}

export default Card;