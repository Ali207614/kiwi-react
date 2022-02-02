import HeaderLogo from "../../component/Header-logo/HeaderLogo"
import HeaderRight from "../../component/Header-right/HeaderRight"
import HeaderLink from "../../component/HeaderLink/HeaderLink"
import {useState} from "react"
import "./main.css"

const HeaderTwo = () => {

    return (
        <div className=" header ">
            <div className="container">
                <div className="row1">
                    <HeaderLogo/>
                    <HeaderLink/>
                    <HeaderRight/>
                </div>
 
            </div>
        </div>
    );
};



export default HeaderTwo;