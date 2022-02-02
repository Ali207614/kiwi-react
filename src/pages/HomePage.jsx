import BodyTop from "../containers/BodyTop/BodyTop"
import HomeHeader from "../component/HomeHeader/HomeHeader"
import BodyCenter from "../containers/BodyCenter/BodyCenter"
import HomePageBottom from "../containers/HomePageBottom/HomePageBottom";
import Header from "../containers/Header/Header";
import Footer from "../containers/footer/footer";
import { useState } from "react"

import "./main.css"
const HomePage = (props) => {
  const [show, setShow ] = useState();



  return (

   <div>
              <div className={`overlay ${show ? "over" : ''} `} onClick={() => setShow(!show)} ></div>
   <Header/>
    <div>

      
    <div className="container">
                  <BodyTop show={show} setShow={setShow} />
                  <HomeHeader />
                </div>
                <BodyCenter />
              <HomePageBottom/>

        

    </div>
    <Footer/>
   </div>
  );
};



export default HomePage;