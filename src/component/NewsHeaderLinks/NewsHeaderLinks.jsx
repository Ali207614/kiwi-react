import News from "../../containers/News/news"
import Message from "../../containers/Message/Message"
import { useState } from "react"
import "./main.css"
import CountDown from "../CountDown/CountDown";
const NewsHeaderLinks = () => {
    const [headLinks,setHeadLinks] = useState("one");
    return (
        <>
          <div className="container news_header">
             <button 
              onClick={() => setHeadLinks("one")}
              className={`product_link ${headLinks === "one" ? "fakeProduct" : ""}`}
            >
               Объявления  
            </button>
                                                                                     
            <button 
              onClick={() => setHeadLinks("two")}
              className=""
              className={`product_link ${headLinks === "two" ? "fakeProduct" : ""}`}
            >
              Сообщения
            </button>

            <button
              onClick={() => setHeadLinks("three")}
              className=""
              className={`product_link ${headLinks === "three" ? "fakeProduct" : ""}`}
            >
              Платежи и счёт
            </button>

            <button
              onClick={() => setHeadLinks("four")}
              className=""
              className={`product_link ${headLinks === "four" ? "fakeProduct" : ""}`}
            >
              Настройки
            </button>

            <button
              onClick={() => setHeadLinks("five")}
              className=""
              className={`product_link ${headLinks=== "five" ? "fakeProduct" : ""}`}
            >
              Мой бизнес
            </button>
          <div className="menu-border"></div>

          
        </div>
        <div className={`productNone ${headLinks === "one" ? "productBlock" : ""}`}>
                <News/>
            </div>
          <div className={`productNone ${headLinks === "two" ? "productBlock" : ""}`}>
              <Message/>
          </div>  
          <div className={`productNone ${headLinks === "three" ? "productBlock" : ""}`}>
              <CountDown/>
          </div>  
          <div className={`productNone ${headLinks === "four" ? "productBlock" : ""}`}>
              <CountDown/>
          </div>  
          <div className={`productNone ${headLinks === "five" ? "productBlock" : ""}`}>
              <CountDown/>
          </div>  
        </>
    );
};

NewsHeaderLinks.propTypes = {};

export default NewsHeaderLinks;