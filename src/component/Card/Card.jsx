import { Link } from "react-router-dom"
import "./main.css"

const Card = ({id,title,price,image}) => {
    return (
        <Link className="card" to={`/product/${id}`} id={id}>
            <img className='image' src={image} alt=""/>
            <p className="product_title">{title}</p>
            <p className="product_price">{price} $</p>
        </Link>
    );
};



export default Card;