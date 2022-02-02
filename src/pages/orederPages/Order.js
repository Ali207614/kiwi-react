import Header from '../../containers/Header/Header'
import BodyTop from "../../containers/BodyTop/BodyTop";
import Edit from "../../assets/icons/edit.svg"
import Img from "../../assets/img/Screen Shot 2018-07-18 at 3.20.24 AM.svg"
import './order.css'
import {Button} from "@material-ui/core";
function Order() {
    return(
        <>
            <Header/>

            <div className="container font">
                <BodyTop/>
                <div className="order-head">
                    <h5 className="order-head-txt">Вы выбрали:</h5>
                    <h5 className="order-head-txt-two">Недвижимость <p>»</p></h5>
                    <h5 className="order-head-txt-two">дома <p>»</p></h5>
                    <h5 className="order-head-txt-two">Аренда долгосрочная</h5>
                    <button className="order-head-btn"><div className="edit-radius"><img className="edit-svg" src={Edit} alt=""/></div>Изменить</button>

                </div>
                    <div className="order-form">
                        <div className="form__group field">
                            <input type="input" className="form__field" placeholder="Name" name="name" id='name' required/>
                            <label htmlFor="name" className="form__label">Цена</label>
                        </div>
                        <div className="form-select-two">
                            <select className="item-select">
                                <option className="opt-txt" selected>Сум</option>
                                <option className="opt-txt">Доллор</option>
                                <option className="opt-txt">Еуро</option>
                                <option className="opt-txt">Динар</option>
                                <option className="opt-txt">Тенге</option>
                            </select>
                        </div>
                        <div className="order-head-check">
                            <label className="check-label">
                                <input className="check-select" type="checkbox"/><p>Договорная</p>
                            </label>
                        </div>
                    </div>
                <div className="order-body">
                    <h4 className="order-body-txt">Количество комнат</h4>
                    <div className="order-body-forms">
                        <div className="form__group-two field">
                            <input type="input" defaultValue={4} className="form__field-two" placeholder="Name" name="name" id='name' required/>
                        </div>
                        <div className="form__group-two field-two">
                            <input type="input" defaultValue={900} className="form__field-two" placeholder="Name" name="name" id='name' required/>
                        </div>
                        <div className="form__group-two field-three">
                            <input type="input" defaultValue={90} className="form__field-two" placeholder="Name" name="name" id='name' required/>
                        </div>
                    </div>
                </div>
                <div className="order-body-two">
                    <h4 className="order-body-txt">Расположения</h4>
                    <div className="check-row">
                        <label className="check-row-label">
                            <input className="check-select-two" type="checkbox"/><p>
                            В городе
                        </p>
                        </label>
                        <label className="check-row-label-two">
                            <input className="check-select-two" type="checkbox"/><p>
                            Вдоль трассы
                        </p>
                        </label>
                        <label className="check-row-label-three">
                            <input className="check-select-two" type="checkbox"/><p>
                            В дачном массиве
                        </p>
                        </label>
                    </div>
                    <div className="check-row-two">
                        <label className="check-two-row-label">
                            <input className="check-select-two" type="checkbox"/><p>
                            В пригороде
                        </p>
                        </label>
                        <label className="check-two-row-label-two">
                            <input className="check-select-two" type="checkbox"/><p>
                            Возле водоема, реки
                        </p>
                        </label>
                        <label className="check-two-row-label-three">
                            <input className="check-select-two" type="checkbox"/><p>
                            На закрытой территории
                        </p>
                        </label>
                    </div>
                    <div className="check-row-three">
                        <label className="check-two-row-label">
                            <input className="check-select-two" type="checkbox"/><p>
                            В предгорях
                        </p>
                        </label>
                        <label className="check-two-row-label-two">
                            <input className="check-select-two" type="checkbox"/><p>
                            В сельской местности
                        </p>
                        </label>
                    </div>
                </div>
                <div className="order-body-three">
                    <div className="nav-txt">
                        <h4 className="order-body-txt">Этажность дома*</h4>
                        <h4 className="order-body-txt-two">Высота потолков</h4>
                        <h4 className="order-body-txt-two">Площадь участка*</h4>
                    </div>

                    <div className="order-body-forms">
                        <div className="form__group-two field">
                            <input type="input" defaultValue={4} className="form__field-two" placeholder="Name" name="name" id='name' required/>
                        </div>
                        <div className="form__group-two field-two">
                            <input type="input" defaultValue={"2m"} className="form__field-two" placeholder="Name" name="name" id='name' required/>
                        </div>
                        <div className="form__group-two field-three">
                            <input type="input" defaultValue={342} className="form__field-two" placeholder="Name" name="name" id='name' required/>
                        </div>
                    </div>
                </div>
                <div className="order-body-two">
                    <h4 className="order-body-txt">Состояние дома</h4>
                    <div className="check-row">
                        <label className="check-row-label">
                            <input className="check-select-two" type="checkbox"/><p>
                            В городе
                        </p>
                        </label>
                        <label className="check-row-label-two">
                            <input className="check-select-two" type="checkbox"/><p>
                            Вдоль трассы
                        </p>
                        </label>
                        <label className="check-row-label-three">
                            <input className="check-select-two" type="checkbox"/><p>
                            В дачном массиве
                        </p>
                        </label>
                    </div>
                    <div className="check-row-two">
                        <label className="check-two-row-label">
                            <input className="check-select-two" type="checkbox"/><p>
                            В пригороде
                        </p>
                        </label>
                        <label className="check-two-row-label-two">
                            <input className="check-select-two" type="checkbox"/><p>
                            Возле водоема, реки
                        </p>
                        </label>
                        <label className="check-two-row-label-three">
                            <input className="check-select-two" type="checkbox"/><p>
                            На закрытой территории
                        </p>
                        </label>
                    </div>
                    <div className="check-row-three">
                        <label className="check-two-row-label">
                            <input className="check-select-two" type="checkbox"/><p>
                            В предгорях
                        </p>
                        </label>
                        <label className="check-two-row-label-two">
                            <input className="check-select-two" type="checkbox"/><p>
                            В сельской местности
                        </p>
                        </label>
                    </div>
                </div>
                <div className="only-txt">
                    <h4 className="last-forms-txt">Тип дома</h4>
                    <h4 className="last-forms-txt-two">Электричество</h4>
                </div>
                <div className="last-forms">
                    <select className="item-select-three">
                        <option value="Коттедж">Коттедж</option>
                    </select>
                    <select className="item-select-two">
                        <option value="Есть возможность подключения">Есть возможность подключения</option>
                    </select>
                </div>
                <div className="order-body-two">
                    <h4 className="order-body-txt">Состояние дома</h4>
                    <div className="check-row">
                        <label className="check-row-label">
                            <input className="check-select-two" type="checkbox"/><p>
                            В городе
                        </p>
                        </label>
                        <label className="check-row-label-two">
                            <input className="check-select-two" type="checkbox"/><p>
                            Вдоль трассы
                        </p>
                        </label>
                        <label className="check-row-label-three">
                            <input className="check-select-two" type="checkbox"/><p>
                            В дачном массиве
                        </p>
                        </label>
                    </div>
                    <div className="check-row-two">
                        <label className="check-two-row-label">
                            <input className="check-select-two" type="checkbox"/><p>
                            В пригороде
                        </p>
                        </label>
                        <label className="check-two-row-label-two">
                            <input className="check-select-two" type="checkbox"/><p>
                            Возле водоема, реки
                        </p>
                        </label>
                        <label className="check-two-row-label-three">
                            <input className="check-select-two" type="checkbox"/><p>
                            На закрытой территории
                        </p>
                        </label>
                    </div>
                    <div className="check-row-three">
                        <label className="check-two-row-label">
                            <input className="check-select-two" type="checkbox"/><p>
                            В предгорях
                        </p>
                        </label>
                        <label className="check-two-row-label-two">
                            <input className="check-select-two" type="checkbox"/><p>
                            В сельской местности
                        </p>
                        </label>
                    </div>
                </div>
                <div className="order-foot">
                    <h1 className="big-txt">Местоположение объекта</h1>
                </div>
                <div className="only-txt">
                    <h4 className="last-forms-txt">Регион</h4>
                    <h4 className="last-forms-txt-second">Город / Район</h4>
                </div>
                <div className="last-forms">
                    <select className="item-select-three">
                        <option value="Ташкент">Ташкент</option>
                    </select>
                    <select className="item-select-two">
                        <option value="Мирза Улугбекский район">Мирза Улугбекский район</option>
                    </select>
                </div>
                <div className="order-foot-img">
                    <img className="foot-img" src={Img} alt=""/>
                </div>
                <div className="order-food-end">
                    <button className="foot-btn">
                        Добавить обьявления бесплатно
                    </button>
                    <a className="foot-link" href="#">Предпросмотр</a>
                </div>
                </div>
        </>

    )
}

export default Order;