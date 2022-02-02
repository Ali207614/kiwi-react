import Avatar from "../../assets/img/man.svg"
import { Link } from "react-router-dom";
import "./main.css"
const HeaderRight = () => {
    return (
        <div className="row1">
            <div className="row1">
                <a href="#" className="lang line">Рус</a>
                    <span className="line-1">|</span>
                <a href="#" className="lang">O'z</a>
            </div>
            <div className="row1 enter-right">
                <Link to='/name-register' href="#" className="enter">Вход</Link>
                    <span className="line-2">|</span>
                <Link to='/name-register' href="#" className="enter">Регистрация</Link>
            </div>
                <Link className="me-2" to="/newsPage">
                    <img src={Avatar} alt=""/>
                </Link>
        </div>
    );
};


export default HeaderRight;