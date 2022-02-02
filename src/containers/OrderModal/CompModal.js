import React, {useState} from "react";
import Modal from 'react-awesome-modal';
import ModalLink from "./ModalLink";
import Cross from "../../assets/icons/cross.svg"
import './modal.css'
import {ChildWorld,TheProperty,Transport,Work,Animals,HouseAndGarden,
    Electronics,BusinessAndServices,FashionAndStyle,HobbiesLeisureAndSports} from "./DataLink"

const ModalComp = (props)=>{

    const {isOpen,setIsOpen} = props
    const [category,setCategory] = useState([]);
    const [textHold,setTextHold] = useState('');
    console.log(textHold)
    const style= {
        borderRight:"1px solid #DADADA"
    }

    return(
        <Modal visible={isOpen} width="1020" height="500" effect="fadeInUp" onClickAway={() => setIsOpen(false)&setCategory([])&setTextHold('')&window.location.reload(true)}>
            <div className="big-item">
                <div className="small-item">
                    <h3>Рубрика</h3>
                    <ul className="item-txt mt-3">
                        <li onClick={()=> setCategory(ChildWorld) & setTextHold("Детский мир")} className="mt-2">Детский мир</li>
                        <li onClick={()=> setCategory(TheProperty)& setTextHold("Недвижимость")} className="mt-2">Недвижимость</li>
                        <li onClick={()=> setCategory(Transport)& setTextHold("Транспорт")} className="mt-2">Транспорт</li>
                        <li onClick={()=> setCategory(Work)& setTextHold("Работа")} className="mt-2">Работа</li>
                        <li onClick={()=> setCategory(Animals)& setTextHold("Животные")} className="mt-2">Животные</li>
                        <li onClick={()=> setCategory(HouseAndGarden)& setTextHold("Дом и сад")} className="mt-2">Дом и сад</li>
                        <li onClick={()=> setCategory(Electronics)& setTextHold("Электроника")} className="mt-2">Электроника</li>
                        <li onClick={()=> setCategory(BusinessAndServices)& setTextHold("Бизнес и услуги")} className="mt-2">Бизнес и услуги</li>
                        <li onClick={()=> setCategory(FashionAndStyle)& setTextHold("Мода и стиль")} className="mt-2">Мода и стиль</li>
                        <li onClick={()=> setCategory(HobbiesLeisureAndSports)& setTextHold("Хобби, отдых и спорт")} className="mt-2">Хобби, отдых и спорт</li>
                    </ul>
                </div>
                <div className="small-item-two" style={category.length!==0?style:{}}>
                    <ModalLink setIsOpen={setIsOpen} textHold={textHold} category={category}/>
                </div>
                <button onClick={()=> setIsOpen(false)&setCategory([])&setTextHold('')&window.location.reload(true)} className="closeModal"><img className="closeImg" width="25" height="25" src={Cross} alt=""/></button>
            </div>
        </Modal>
    )
}

export default ModalComp;