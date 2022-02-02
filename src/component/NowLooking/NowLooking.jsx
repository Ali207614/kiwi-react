import {Link} from "react-router-dom"
import Slider from "react-slick";
import "./main.css"

const NowLooking = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: false
      };
    return (
       <div className="carouselTwo">
           <h3 className="looking">СЕЙЧАС ИЩУТ</h3>
            <div className="scrol">
            <Slider {...settings}>
                <div className="carouseItem">
                        <Link className="sroll-title">купить Мясная продукция</Link>
                        <span>2 часа назад</span>
                </div> 
                <div className="carouseItem">
                        <Link className="sroll-title">купить Мясная продукция</Link>
                        <span>2 часа назад</span>
                </div>   
                <div className="carouseItem">
                        <Link className="sroll-title">купить Мясная продукция</Link>
                        <span>2 часа назад</span>
                </div>   
                <div className="carouseItem">
                        <Link className="sroll-title">купить Мясная продукция</Link>
                        <span>2 часа назад</span>
                </div>   
                <div className="carouseItem">
                        <Link className="sroll-title">купить Мясная продукция</Link>
                        <span>2 часа назад</span>
                </div>   
                <div className="carouseItem">
                        <Link className="sroll-title">купить Мясная продукция</Link>
                        <span>2 часа назад</span>
                </div>   
                <div className="carouseItem">
                        <Link className="sroll-title">купить Мясная продукция</Link>
                        <span>2 часа назад</span>
                </div>   
                <div className="carouseItem">
                        <Link className="sroll-title">купить Мясная продукция</Link>
                        <span>2 часа назад</span>
                </div>   
                <div className="carouseItem">
                        <Link className="sroll-title">купить Мясная продукция</Link>
                        <span>2 часа назад</span>
                </div>   
                <div className="carouseItem">
                        <Link className="sroll-title">купить Мясная продукция</Link>
                        <span>2 часа назад</span>
                </div>     
            </Slider> 
            </div>
       </div>
    );
};



export default NowLooking;