import '../footer.css'
import Logo from '../../../assets/img/logo footer.svg'
import Apple from '../../../assets/img/icon - apple.png'
import Google from '../../../assets/img/Icon - Google Play.png'
import FooterLink from '../../../component/Footer link/footerLink'
const FooterTop = () => {
    return (
        <div className='footer-top'>
            <div className='container'>
                <div className='row1'>
                    <div className='row1'>
                        <img src={Logo} />
                        <h4 className='logo-text'>
                            Продай, найди, купи <br/> все что ты пожелаешь
                       </h4>
                    </div>
                    <div className='footer-top-text-div'>
                        <p className='footer-top-text'>Веб сайт бесплатных обьявлений | на базе  имеется 234 944 999 шт обяления</p>
                    </div>
                    <div className='row1'>
                        <FooterLink Img={Apple} name='Apple Store' info='Available on the'/>
                        <FooterLink Img={Google} name='GOOGLE PLAY' info='Android App on'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterTop;