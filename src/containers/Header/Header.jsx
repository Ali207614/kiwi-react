import HeaderLogo from "../../component/Header-logo/HeaderLogo"
import HeaderRight from "../../component/Header-right/HeaderRight"
import HeaderRightBottom from "../../component/HeaderRightBottom/HeaderRIghtBottom"
import HeaderBottom from "../../component/HeaderBottom/HeaderBottom"
import HeaderLink from "../../component/HeaderLink/HeaderLink"
import {useState} from "react"
import "./main.css"

const Header = () => {

    return (
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
        </div>
    );
};



export default Header;