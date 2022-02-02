import Search from "../../assets/icons/search3.svg"
import { Link } from "react-router-dom"
import "./main.css"

const FilterPageInput = () => {
    return (
        <div>
            <div className="relat">
                <input className="filterInput" placeholder="Введите название обявления или  выберите из списка" type="text"/>
                <img className="searchImg" src={Search} alt=""/>
            </div>
            <div className="category row2">
                <Link className="category-link filter-link1">Интерсное</Link>
                <Link className="category-link filter-link2">Топ</Link>
                <Link className="category-link filter-link3">Отличные предложение</Link>
                <Link className="category-link filter-link4">Супер цена</Link>
                <Link className="category-link address">г.Ташкент</Link>
                <Link className="category-link address">г.Термез</Link>
                <Link className="category-link address">г.Самарканд</Link>
            </div>

        </div>
    );
};



export default FilterPageInput;