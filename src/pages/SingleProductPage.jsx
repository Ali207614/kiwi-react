import  {useState , useEffect} from "react"
import {Link} from "react-router-dom"
import SingleCard from "../component/SIngleCard/SingleCard"
import axios from "axios"
import React from 'react';
import SingleProductTop from "../component/SingleProductTop/SingleProductTop"
import Texts from "../component/Texts/Texts"
import Table from "../component/Table/Table";
import PhoneNumber from "../component/Phone-Number/PhoneNumber";
import SingleButton from "../component/SIngleButton/SingleButton";
import BottomLink from "../component/BottomLink/BottomLink";
import Home from "../assets/icons/home.svg"
import Footer from "../containers/footer/footer";
import Header from "../containers/Header/Header";
import "./main.css"

const SingleProductPage = ({match}) => {
    const [singleProduct,setSingleProduct] = useState({
        isFetched:false,
        data:{},
        error:null
      })
      useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${match.params.id}`, {
          })
          .then(function (response) {
            setSingleProduct({
               isFetched:true,
               data:response.data,
               error:false,
           })
          })
          .catch(function (error) {
            setSingleProduct({
                isFetched:true,
                data:{},
                error:error,
            })
          });
    }, [match.params.id]);

    return (
    <>
    <Header/>
        <div className="container">
        <div className="breadCrumb row2 ">
            <Link className="breadCrumb-text" to='/'><img className="breadCrum-home" src={Home} alt=""/></Link> 
            <span className="breadCrumb-text">/</span>
            <p className="breadCrumb-text">идентификатор элемента { singleProduct.data.id}</p>
            <span className="breadCrumb-text">/</span>
            <p className="breadCrumb-text">{singleProduct.data.category}</p> 
        </div>

        <h2 className="singleTitle">{singleProduct.data.title}</h2>
            <div className="singlePro">
                        <div className="single-left">
                        {
                        singleProduct.isFetched ? (
                                <div>
                                    <SingleCard 
                                        id={singleProduct.data.id}
                                        imgSrc={singleProduct.data.image}
                                        title={singleProduct.data.title}

                                    />
                                </div>
                        ) : (
                            <h1>Lodaing...</h1>
                        )
                    }
                        
                    </div>
                    <div className="single-right">
                        <SingleProductTop/>
                        <h3 className="single-product-price">{singleProduct.data.price} $</h3>
                        <Link className="singleLink1">Ташкент, Ташкентская область, Юнусабадский район </Link>
                        <div className="hideNumber">
                            <PhoneNumber/>
                            <PhoneNumber/>
                        </div>
                        <p className='upt'> Автор обьявлении: <Link className="after">Зухриддин Темиров</Link> </p>
                        <SingleButton/>
                        <Table/>
                        <Texts/>
                        <div className="row2">
                            <p className="views">Просмотры:10958	</p>
                            <Link className="complain"> Пожаловатся</Link>
                        </div>
                    </div>
            </div>

            <BottomLink/>
    </div>
    <Footer/>
    </>
    );

};



export default SingleProductPage;