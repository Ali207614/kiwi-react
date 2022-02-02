import {useState} from "react"
import React from 'react';
import Slider from "react-slick";
import BodyTopList from "../../component/BodyTopList/BodyTopList"
import Airplane from "../../assets/icons/Airplane.svg"
import Store from "../../assets/icons/Store.svg"
import Terminal from "../../assets/icons/Terminal.svg"
import Briefcase from "../../assets/icons/Briefcase.svg"
import Gifts from "../../assets/icons/Gifts.svg"
import Challenge from "../../assets/icons/Challenge.svg"
import Maintenance from "../../assets/icons/In Maintenance.svg"
import Gaming from "../../assets/icons/Gaming.svg"
import Man from "../../assets/icons/Man.svg"
import Modal from 'react-awesome-modal';

import "./main.css"
import List from '../../component/List/List';

const BodyTop = ({show, setShow }) => {
    // const [show, setShow ] = useState();
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
      const CustomerArr = [
        {
            id:1,
            title:"Автомобили",
            name:"box-1",
            src:  Airplane
        },
        {
            id:2,
            title:" Недвижимость",
            name:"box-2",
            src:  Store
        },
        {
            id:3,
            title:" Электроника",
            name:"box-3",
            src: Terminal
           
        },
        {
            id:4,
            title:" Работа",
            name:"box-4",
            src:Briefcase
        },
        {
            id:5,
            title:"Личные вещи",
            name:"box-5",
            src:Gifts
        },
        {
            id:6,
            title:" Дом и Сад",
            name:"box-6",
            src:Challenge
        },
        {
            id:7,
            title:"Стройка и ремонт",
            name:"box-7",
            src:Maintenance
        },
        {
            id:8,
            title:" Хобби и Спорт",
            name:"box-8",
            src:Gaming
        },
        {
            id:9,
            title:" Бизнес и услуги",
            name:"box-9",
            src:Man
        },
        {
            id:10,
            title:"Автомобили",
            name:"box-1",
            src:Airplane
        },
        {
            id:11,
            title:"Недвижимость",
            name:"box-2",
            src:Store
        },
        {
            id:12,
            title:"Электроника",
            name:"box-3",
            src:Terminal
        },
    ]
    console.log(show)
    return (
        
        
       <>

        <div className="relat">
        <div className="carousel  ">
            <Slider {...settings}>

            {
                       CustomerArr.map(item => (
                        <BodyTopList 
                            id = {item.id}
                            src={item.src}
                            title={item.title}
                            name = {item.name}
                            show={show}
                            setShow={setShow}
                        />
                    ))
                   
            }       
        </Slider>   
      </div>
        <div className={`none ${show ? "show" : ""}`} >
                <List/>
        </div>
        </div>
        
       </>
    );
};



export default BodyTop;