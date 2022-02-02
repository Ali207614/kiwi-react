
import LinkTop from '../../../component/footer-bottom link/linkTop'
import { Car, Property,Electronics,Personal,Home,Construction,Sport, Business  } from '../../../data/footerData'
import '../footer.css'
const FooterBottom = () => {
    return (
        <div className='footer-bottom'>
            <div className='container'>
                <div className='row-top'>
                   <div className='box'>
                   <LinkTop topLink='Автомобили' color='red' />
                        <div>
                            {
                                Car.map(function (item) {
                                    return(
                                        <a href='#' className='footer-link'>{item.info}</a>
                                    )
                                  
                                })
                            }
                        </div>
                        <LinkTop topLink='Дом и Сад' color='green' />
                        {
                            Home.map(function (item){
                                return(
                                    <a href="#" className='footer-link'>{item}</a>
                                )
                            }) 
                        }
                   </div>
                   <div className='box'>
                   <LinkTop topLink='Недвижимость' color='yellow' />
                        {
                            Property.map(function (item){
                                return(
                                    <a href="#" className='footer-link'>{item}</a>
                                )
                            }) 
                        }
                         <LinkTop topLink='Товары стройки и ремонта' color='purple' />
                        {
                            Construction.map(function (item){
                                return(
                                    <a href="#" className='footer-link'>{item}</a>
                                )
                            }) 
                        }
                   </div>
                   <div className='box'>
                   <LinkTop topLink='Электроника' color='red' />
                        {
                            Electronics.map(function (item){
                                return(
                                    <a href="#" className='footer-link'>{item}</a>
                                )
                            }) 
                        }
                            <LinkTop topLink='Хобби, Отдых и Спорт' color='cyan' />
                        {
                            Sport.map(function (item){
                                return(
                                    <a href="#" className='footer-link'>{item}</a>
                                )
                            }) 
                        }
                   </div>
                   <div className='box'>
                   <LinkTop topLink='Личные вещи' color='orange' />
                        {
                            Personal.map(function (item){
                                return(
                                    <a href="#" className='footer-link'>{item}</a>
                                )
                            }) 
                        }
                        <LinkTop topLink=' Бизнес и услуги' color='blue' />
                        {
                            Business .map(function (item){
                                return(
                                    <a href="#" className='footer-link'>{item}</a>
                                )
                            }) 
                        }
                   </div>


                </div>
           <div className='row1 bottom-b'>
               <a href='#' className='footer-link' activeClassName='footer-active'> Подать объявление</a>
               <a href='#' className='footer-link' activeClassName='footer-active'> Объявления  </a>
               <a href='#' className='footer-link' activeClassName='footer-active'>Магазины </a>
               <a href='#' className='footer-link' activeClassName='footer-active'>Помощь</a>
               <a href='#' className='footer-link' activeClassName='footer-active'>Безопасность </a>
               <a href='#' className='footer-link' activeClassName='footer-active'> Реклама на сайте</a>
               <a href='#' className='footer-link' activeClassName='footer-active'> О компании</a>
                                                                                                                   

           </div>
            </div>
        </div>
    )
}

export default FooterBottom;