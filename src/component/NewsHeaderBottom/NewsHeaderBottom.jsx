import "./main.css"

const NewsHeaderBottom = () => {
    return (
        <div className="new">
            <div className="row1 container">
                <p className="userName">Здравствуйте Зухриддин Темиров</p>
                <div className="row2">
                    <span className="mon">Ваш счет: 2 3000 сум</span>
                    <button className="firstBtn"><span></span>Поднять</button>
                </div>
            </div>
        </div>
    );
};

NewsHeaderBottom.propTypes = {};

export default NewsHeaderBottom;