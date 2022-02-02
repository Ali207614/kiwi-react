import "./main.css"

const SingleButton = () => {
    return (
        <div className="row2 buttonBox">
            <button className=" singleBtn1">Написать автору</button>
            <button className=" singleBtn2">Предложить свою цену</button>
        </div>
    );
};

SingleButton.propTypes = {};

export default SingleButton;