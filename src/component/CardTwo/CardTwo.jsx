import { Link } from "react-router-dom"
import "./main.css"

const CardTwo = ({id,title,price,image}) => {
    return (
        <Link className="cardTwo" to={`/product/${id}`} id={id}>
            <img className='image' src={image} alt=""/>
            <div className="sale">
                <p className="product_title">{title}</p>
                <p className="product_price">{price} $</p>
            </div>
        </Link>
    );
};



export default CardTwo;