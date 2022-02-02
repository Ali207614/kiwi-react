import {Link} from "react-router-dom"
import {useState} from "react"
import ViewedPage from "../../pages/ViewedPage"
import ChoicePage from "../../pages/ChoicePage"
import ReducedPage from "../../pages/ReducedPage"
import "./bottomLink.css"


const BottomLink = () => {
  const [activeBottom,setActiveBottom] = useState("firstProduct");
  const [more, setMore] = useState(false)

    return (
      <div className={`home-menu ${more ? "more" : ''}`}>  
          <button
              onClick={() => setActiveBottom("firstProduct")}
              className={`product_link ${activeBottom === "firstProduct" ? "fakeProduct" : ""}`}
            >
              Просмотренные
            </button>
            <button
              onClick={() => setActiveBottom("secondProduct")}
              className=""
              className={`product_link ${activeBottom === "secondProduct" ? "fakeProduct" : ""}`}
            >
              Выбор редакции
            </button>
            <button
              onClick={() => setActiveBottom("thirdProduct")}
              className=""
              className={`product_link ${activeBottom === "thirdProduct" ? "fakeProduct" : ""}`}
            >
              Сниженные цены
            </button>
          <div className="menu-border"></div>
            <div className="block-4">
              <div className={`productNone ${activeBottom === "firstProduct" ? "productBlock" : ""}`}>
                  <ViewedPage/>
              </div>
              <div className={`productNone ${activeBottom === "secondProduct" ? "productBlock" : ""}`}>
                <ChoicePage/>
              </div>
              <div className={`productNone ${activeBottom === "thirdProduct" ? "productBlock" : ""}`}>
                <ReducedPage/>
              </div>
            </div>
            <button className="bottom-link" onClick={() => setMore(!more)}>Покозать еще</button>
    </div>
    );
};



export default BottomLink;