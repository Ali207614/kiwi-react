

import React from 'react'
import './Register.css'
import RegisterRight from '../../component/Register-right/RegisterRight'
import RegisterButton from '../../component/Register button/RegisterButton'
import RegisterLink from '../../component/Register button/RegisterLink'
import { Link } from 'react-router-dom'
import Header from '../../containers/Header/Header'

class EmailRegister extends React.Component {
    
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
   render(){
    return (
        <div>
            <Header/>
            <div className=' container wrapper'>
                <div className='wrapper-left'>
                    <h1 className='register-head'>Бесплатная регистрация</h1>
                    <form className='form-second'>
                        <label className='register-label' htmlFor='email'>Введите ваш email</label>
                        <input id='email' className='register-input' type='text' placeholder='example@kivi.uz'/>
                        <label className='register-label' htmlFor='number'>Введите ваш номер телефона</label>
                        <div className='row1'>
                        <input  className='register-input register-input-one' type='text' placeholder='998'/>
                        <input id='number' className='register-input register-input-two' type='text' placeholder='97 772 13 44'/>
                        </div>
                        <p className='register-info'>
                        <b className='register-info-holder'>Нажимая на кнопку «Получить доступ», я даю согласие на обработку персональных данных и соглашаюсь c условиями </b>
                        договора-оферты и политикой конфиденциальности
                        </p>
                        <div className='row1'>
                            <Link to='/name-register' >
                                <button type='button' className='back-link'></button>
                            </Link>
                            <RegisterButton setShow={this.count} link='/phone-register' classBtn='form-second-btn' buttonText='Получить доступ' />
                        </div>
                      
                        
                        <RegisterLink bottomText='Войдите в систему, если у вас уже есть аккаунт kivi.uz' />
                    </form>

                </div>
                <RegisterRight />
            </div>
        </div>
    )
   }
}

export default EmailRegister;