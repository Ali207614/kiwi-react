
import RegisterRight from '../../component/Register-right/RegisterRight'
import RegisterButton from '../../component/Register button/RegisterButton'
import RegisterLink from '../../component/Register button/RegisterLink'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../containers/Header/Header'

class PhoneRegister extends React.Component {

    state = {
        second: 90
    }

    count = () => {
        setInterval(() => {
            this.setState({
                second : this.state.second -1
            })
        }, 1000)
    }

  
    render() {
        return (
            <div>
                 <Header/>
                <div className=' container wrapper'>
                    <div className='wrapper-left'>
                        <h1 className='register-head'>Бесплатная регистрация</h1>
                        <p className='register-label form-second'>Код отправлен в виде смс на указанный номер телефона</p>
                        <form className='form-second'>
                            <label className='register-label' htmlFor='phone'>Введите ваш номер телефона</label>
                            <div className='row1'>
                                <input id='phone' className='register-input register-input-two' type='text' placeholder='97 772 13 44' />
                                <div className='register-input register-input-one btn-bg'>{this.state.second}S</div>
                            </div>
                            <input className='register-input border-register' placeholder='Введите код подтверждения' />
                            <RegisterButton link='/password-register' buttonText='Далее' />
                            <RegisterLink bottomText='Войдите в систему, если у вас уже есть аккаунт kivi.uz' />
                        </form>

                    </div>
                    <RegisterRight />
                </div>
            </div>
        );
    }
};


export default PhoneRegister;