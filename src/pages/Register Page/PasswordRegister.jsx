import RegisterRight from '../../component/Register-right/RegisterRight'
import RegisterButton from '../../component/Register button/RegisterButton'
import RegisterLink from '../../component/Register button/RegisterLink'
import { Link } from 'react-router-dom'
import Header from '../../containers/Header/Header'


const PasswordRegister = () => {
    return (
        <div>
             <Header/>
            <div className=' container wrapper'>
                <div className='wrapper-left'>
                    <h1 className='register-head'>Бесплатная регистрация</h1>
                    <p className='register-info-holder form-three'>Вы успешно зарегистрированы на сайте киви и ваше пароль отправлен в виде смс на ваше телефонный номер</p>
                    <form className='form-second'>
                        <label className='register-label' htmlFor='phoneOrEmail'>Введите email или номер телефона</label>
                        <input className='register-input' id='phoneOrEmail' placeholder='99891 167 27 23'/>
                        <label className='register-label' htmlFor='pass'>Пароль</label>
                        <input type='password' className='register-input' id='pass' placeholder='***********'/>
                            <RegisterButton link='/' buttonText='Войти' />
                        <RegisterLink bottomText='Восстоновить ваше пароль' />
                    </form>

                </div>
                <RegisterRight />
            </div>
        </div>
    );
};


export default PasswordRegister;