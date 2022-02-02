import Logo from "../../assets/img/Group 3.svg"
import {Link} from "react-router-dom"
import "./main.css"
const HeaderLogo = () => {
    return (
        <Link to="/" className="row2">
           <img src={Logo} alt=""/> 
           <b className="logo_title">Продай, найди, купи <br/>
                все что пожелаешь…</b>
        </Link>
    );
};



export default HeaderLogo;