import Slider from "react-slick";
import Laptops from '../../assets/icons/Bitmap.svg';
import Office from '../../assets/icons/Group 19.svg';
import Bags from '../../assets/icons/Group 20.svg';
import BodyCenterCarousel from "../../component/BodyCenterCarousel/BodyCenterCarousel"
import "./main.css"
const BodyCenter = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        autoplay: true,
     
        autoplaySpeed: 4000,
        pauseOnHover: true
      };

 const Brands = [
    {
        title: 'Техника Apple по доступным ценам',
        amount: 987,
        bgc: 'bgc1',
        img: Laptops
    },
    {
        title: 'Все товары для офиса в одном месте',
        amount: 987,
        bgc: 'bgc2',
        img: Bags
    },
    {
        title: 'Брендовые товары за копейки',
        amount: 987,
        bgc: 'bgc3',
        img: Office
    },
 
    {
        title: 'Техника Apple по доступным ценам',
        amount: 987,
        bgc: 'bgc1',
        img: Laptops
    },
    {
        title: 'Все товары для офиса в одном месте',
        amount: 987,
        bgc: 'bgc2',
        img: Bags
    },
    {
        title: 'Брендовые товары за копейки',
        amount: 987,
        bgc: 'bgc3',
        img: Office
    },
    {
        title: 'Техника Apple по доступным ценам',
        amount: 987,
        bgc: 'bgc1',
        img: Laptops
    },
   
  
]

    return (
    
            <div className="body-carousel overFlow ">
              
              <Slider {...settings}>
              {
                       Brands.map(item => (
                        <BodyCenterCarousel 
                            bgc={item.bgc}
                            img={item.img}
                            title={item.title}
                            amount = {item.amount}
                        />
                    ))
                   
                   }   
              </Slider>
            </div>
          
    );
};



export default BodyCenter;