import {useState} from "react";
import { Link } from "react-router-dom"
import ModalComp from "../../containers/OrderModal/CompModal";
import "./main.css"

const HeaderLink = () => {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <div className="row header-inner">
            <ModalComp isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Link onClick={()=> setIsOpen(true)} className="header_links">Объявления </Link>
            <Link  className="header_links">Магазины </Link>
            <Link className="header_links">Для бизнеса</Link>
            <Link className="header_links"> Помощь</Link>                                      
        </div>
    );
};



export default HeaderLink;