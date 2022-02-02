import { useState } from "react"
import "./main.css"
const BodyTopList = ({ name, id, setShow, show, src, title }) => {




  return (
    
        <>
            <div
        onClick={() => setShow(id)}
        className={`Carousel-box ${show === id ? "show" : ""}`}
        >
            <div className={`btn ${name}`}>
              <span className="src">
                <img src={src} alt="" />
              </span>



            </div>
        <p className="title">{title}</p>
    </div>
        
        </>



  );
};



export default BodyTopList;