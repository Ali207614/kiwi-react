import MessageList from "../../component/MessageList/MessageList"
import MessageListRight from "../../component/MessageListRight/MessageListRight"
import "./main.css"
const Message = () => {
    return (
        <div className="message-block">
            <div className="message-inner container">
                <div className="messageList-left">
                    <MessageList/>
                </div>
                <div className="messageList-right">
                    <MessageListRight/>
                </div>
        </div>
        </div>
    );
};



export default Message;