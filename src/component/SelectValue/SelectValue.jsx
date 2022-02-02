import Close from "../../assets/img/Fill 1 (1).svg"
import "./main.css"

const SelectValue = () => {
    return (
        <div className="row2 filterSelect">
            <span className="value">Вы сейчас в рубрике</span>
            <div className="dropdown">
                <div className="dropMenu row2">
                    <button className="select_btn row1">Электроника <span><img src={Close} alt=""/></span></button>
                    <button className="select_btn row1">Мониторы <span><img src={Close} alt=""/></span></button>
                </div>
                <div className="dropList">

                </div>
            </div>
        </div>
    );
};

export default SelectValue;