import React, {useState} from "react";
import {Link} from "react-router-dom";

const someArr = [
    'Обмен',
    'Продажа',
    'Аренда долгосрочная',
    'Аренда посуточно',
    'Автозвук',
    'Транспорт',
    'Аксессуары для авто',
    'Транспорт на запчас',
    "Одежда для девочек",
    "Одежда для мальчиков"
]
function ModalLink(props){
    const {category,textHold,setIsOpen} = props;

    const [arr,setArr] = useState([])
    const [categoryText,setCategoryText]=useState('')
    console.log(categoryText)
    return(
        <div className="d-flex">
            <div>
                <h3 >{textHold}</h3>
                <ul className="list-unstyled item-txt-two mt-3">
                    {
                        category.map((item)=>(

                            <>
                                <li onClick={()=> setArr(someArr)&setCategoryText(item)} className="mt-2">{item}</li>
                            </>

                        ))
                    }

                </ul>
            </div>
            <div>
                <h4 className="small-txt">{categoryText}</h4>
                <ul className="list-unstyled item-txt-three mt-3 popw">
                    {
                        arr.map(item=>(
                            <li onClick={()=>setIsOpen(false)&window.location.reload(true)} className="mt-2"><Link className={'item-link'} to={'/Order'}>{item}</Link></li>
                        ))
                    }
                </ul>
            </div>
        </div>

    )
}
export default ModalLink;