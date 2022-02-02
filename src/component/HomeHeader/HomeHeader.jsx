import {Link} from "react-router-dom"
import FirsProduct from "../../pages/FirstProduct"
import SecondProduct from "../../pages/SecondProduct"

import {useState} from "react"
import "./main.css"
const HomeHeader = () => {
   const [btnState,setBtnState] = useState("one");

    return (
        <div className="home-menu">  
          <button
              onClick={() => setBtnState("one")}
              className={`product_link ${btnState === "one" ? "fakeProduct" : ""}`}
            >
              Новые объявления
            </button>
            <button
              onClick={() => setBtnState("two")}
              className=""
              className={`product_link ${btnState === "two" ? "fakeProduct" : ""}`}
            >
              Лучщие предложение
            </button>
          <div className="menu-border"></div>
            <div className={`productNone ${btnState === "one" ? "productBlock" : ""}`}>
                <FirsProduct/>
            </div>
            <div className={`productNone ${btnState === "two" ? "productBlock" : ""}`}>
              <SecondProduct/>
            </div>
        </div>
    );
};



export default HomeHeader;