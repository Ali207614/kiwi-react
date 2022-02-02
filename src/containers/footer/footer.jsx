

import FooterBottom from './footer bottom/footerBottom'
import FooterTop from './Footer top/footerTop'
import './footer.css'
const Footer  = () =>{
return(
    <div className='footer'>
        <div>
          <FooterTop/>
          <FooterBottom/>
        </div>
    </div>
)
}

export default Footer