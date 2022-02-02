import "./main.css"

const BodyCenterCarousel = ({title,amount,img,bgc}) => {
    return (
        <div className={`block ${bgc}`}>
            <h2 className="carousel-title">{title}</h2>
            <img  src={img} alt=""/>
            <p className="carousel-amount">{amount} обьявлениий  {'>'}</p>
        </div>
    );
};



export default BodyCenterCarousel;