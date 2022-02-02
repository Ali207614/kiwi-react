import {Link} from "react-router-dom"
import "./main.css"

const List = () => {
    
    return (
        
        <div className="row1">
            <div className="listUl">
                <ul>
                    <li><Link>Телефоны</Link></li>
                    <li><Link>Компьютеры</Link></li>
                    <li><Link>Фото / видео</Link></li>
                    <li><Link>Тв / видеотехника</Link></li>
                    <li><Link>Аудиотехника</Link></li>
                </ul>
            </div>
            
            <div className="listUl">
                <ul>
                    <li><Link>Игры и игровые приставки</Link></li>
                    <li><Link>Техника для дома</Link></li>
                    <li><Link>Техника для кухни</Link></li>
                    <li><Link>Климатическое оборудование</Link></li>
                    <li><Link>Индивидуальный уход</Link></li>
                </ul>
            </div>
            





            <div className="listUl">
                <ul>
                    <li><Link>Аксессуары и комплектующие</Link></li>
                    <li><Link>Прочая электроника</Link></li>
                    <li><Link>Телефоны</Link></li>
                    <li><Link>Компьютеры</Link></li>
                    <li><Link>Фото / видео</Link></li>
                </ul>
            </div>
            





            <div className="listUl">
                <ul>
                    <li><Link>Телефоны</Link></li>
                    <li><Link>Компьютеры</Link></li>
                    <li><Link>Фото / видео</Link></li>
                    <li><Link>Тв / видеотехника</Link></li>
                    <li><Link>Аудиотехника</Link></li>
                </ul>
            </div>
        </div>
    );
};



export default List;