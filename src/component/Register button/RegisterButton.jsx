
import './RegisterButton.css'
import { Link } from 'react-router-dom'

const RegisterButton = ({ buttonText, link, classBtn, setShow }) => {
    return (
        <Link to={link}>
            <button type='button' onClick={setShow} className={`register-button ${classBtn}`}>
                {buttonText}
            </button>
        </Link>
    )
}

export default RegisterButton;