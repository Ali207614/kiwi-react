import HeaderLogo from "../../component/Header-logo/HeaderLogo"
import HeaderRight from "../../component/Header-right/HeaderRight"
import HeaderRightBottom from "../../component/HeaderRightBottom/HeaderRIghtBottom"
import HeaderBottom from "../../component/HeaderBottom/HeaderBottom"
import HeaderLink from "../../component/HeaderLink/HeaderLink"
import NewsHeaderBottom from "../NewsHeaderBottom/NewsHeaderBottom"
import { Link } from "react-router-dom"

import "./main.css"
import NewsHeaderLinks from "../NewsHeaderLinks/NewsHeaderLinks"

const NewsHeader = () => {
    return (
        <div className="newsHeader">
            <div className=" header ">
                <div className="container">
                    <div className="row1">
                        <HeaderLogo/>
                        <HeaderLink/>
                        <HeaderRight/>
                    </div>
                    <div className={`header-bottom`}>
                        <HeaderBottom />
                        <HeaderRightBottom/>
                    </div>
                </div>
                <NewsHeaderBottom/>
            </div>
            <NewsHeaderLinks/>
        </div>
    );
};



export default NewsHeader;