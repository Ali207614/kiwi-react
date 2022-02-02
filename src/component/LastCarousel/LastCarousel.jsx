import React from 'react';
import  {useState , useEffect} from "react"
import Card from "../Card/Card"
import axios from "axios"
import Slider from "react-slick"
import "./main.css"

const LastCarousel = () => {
    const [Page1,setPage1] = useState({
        isFetched:false,
        data:[],
        error:null
    })
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false
      };
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/electronics`, {

          })
          .then(function (response) {
           setPage1({
               isFetched:true,
               data:response.data,
               error:false,
           })
          })
          .catch(function (error) {
            setPage1({
                isFetched:true,
                data:[],
                error:error,
            })
          })
      
    }, []);
    return (
        <div className="container">
            <div className="lastCarousel">
            <h3 className="lastCarousel_title" >САМОЕ ИНТЕРЕСНОЕ</h3>
                    <div className=" product relat">
                    <Slider {...settings}>
                            {
                                        Page1.data.map((item,index) =>(
                                            <Card
                                                id={item.id}
                                                title={item.title}
                                                image={item.image}
                                                price={item.price}
                                                key={index}

                                            />
                                        ))
                            }
                </Slider> 
                </div>
            </div>
        </div>
    );
};



export default LastCarousel;