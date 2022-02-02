import "./main.css"

const Dropdowns = () => {
    return (
        <div className="row1  drop_inner ">
            <div className="row2">
                <select className="filterPage_select" name="cars" id="cars">
                    <option value="Состояние">Состояние</option>
                    <option value="saab">item 1</option>
                    <option value="opel">item 2</option>
                    <option value="audi">item 3</option>
                </select>

                <select className="filterPage_select" name="cars" id="cars">
                    <option value="Тип объявщика">Тип объявщика</option>
                    <option value="saab">item 1</option>
                    <option value="opel">item 2</option>
                    <option value="audi">item 3</option>
                </select>

                <select className="filterPage_select" name="cars" id="cars">
                    <option value="Ташкент {'>'} Мирза улугбекский район">Ташкент {'>'} Мирза улугбекский район</option>
                    <option value="saab">item 1</option>
                    <option value="opel">item 2</option>
                    <option value="audi">item 3</option>
                </select>
            </div>
            <button className="drop_btn">Применить</button>
        </div>
    );
};



export default Dropdowns;