import Avatar from "../../assets/img/man.svg"
import Forward from "../../assets/img/Forward.svg"
import Shape from "../../assets/img/Shape.svg"
import Attachment from "../../assets/img/attachment.svg"

import "./main.css"

const MessageListRight = () => {
    return (
        <>
            <div>
                <div className="row1">
                    <div className="email row2">
                        <img src={Avatar} alt=""/>
                        <p >contact@jakubwp.com</p>   
                    </div>
                    <div className="forward">
                        <img src={Forward} alt=""/>
                        <img src={Shape} alt=""/>
                    </div>
                </div>
                <p className="data1">Today, 6:02 AM</p>
            </div>
            <div>
                <textarea  className="messageText"></textarea>
                <div className="row1">
                    <img src={Attachment} alt=""/>
                    <button className="ForwardMessage">Отправить</button>
                </div>
            </div>
        </>
    );
};



export default MessageListRight;