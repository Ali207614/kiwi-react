import Dropdowns from "../component/Dropdowns/Dropdowns"
import FilterPageInput from "../component/FilterPageInput/FilterPageInput"
import InputRange from "../component/InputRange/InputRangeTools"
import LastCarousel from "../component/LastCarousel/LastCarousel"
import NowLooking from "../component/NowLooking/NowLooking"
import Product from "../component/Product/Product"
import SelectValue from "../component/SelectValue/SelectValue"
import HeaderTwo from "../containers/HeaderTwo/HeaderTwo"
import Footer from "../containers/footer/footer";

import "./main.css"

const FilterPage = () => {
    return (
        <div>
            <HeaderTwo/>
            <div className="border_bottom">
                <div className="container">
                    <FilterPageInput/>
                    <SelectValue/>
                    <div className="row2">
                        <span className="value">Выберите цену от и до</span>
                        <InputRange/>
                    </div>
                    <Dropdowns/>
                </div>
            </div>
            <div>
                <Product/>
            </div>
            <div className="container">
                <NowLooking/>
                <LastCarousel/>
            </div>
            <Footer/>
        </div>
    );
};


export default FilterPage;