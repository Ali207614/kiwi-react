
import './Register.css'
import RegisterRight from '../../component/Register-right/RegisterRight'
import FooterTop from '../../containers/footer/Footer top/footerTop'
import RegisterButton from '../../component/Register button/RegisterButton'
import RegisterLink from '../../component/Register button/RegisterLink'

import Header from '../../containers/Header/Header'

const NameRegister = () => {
    return (
        <div>
             <Header/>
            <div className=' container wrapper'>
                <div className='wrapper-left'>
                    <h1 className='register-head'>Бесплатная регистрация</h1>
                    <form className='form-first'>
                        
                        <input  className='register-input' type='text'placeholder='Темиров Зухриддин'/>
                        <RegisterButton buttonText='Далее' link='/email-register'/>
                        <RegisterLink bottomText='Войдите в систему, если у вас уже есть аккаунт kivi.uz'/>
                    </form>
                   
                </div>
                <RegisterRight />
            </div>
            <FooterTop/>
        </div>
    )
}

export default NameRegister;