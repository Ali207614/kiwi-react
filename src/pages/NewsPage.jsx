import NewsHeader from "../component/NewsHeader/NewsHeader"
import FooterTop from "../containers/footer/Footer top/footerTop"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Message from "../containers/Message/Message" 
import News from "../containers/News/news"
const NewsPage = () => {
    return (
        <div>
            <NewsHeader/>
              

            <FooterTop/>
        </div>
    );
};



export default NewsPage;