import React from 'react';
import Avatar from '../../assets/img/Oval 2.png'
import More from '../../assets/img/more.png'
import classes from './NewsCard.module.css'
import { Link } from 'react-router-dom';


const NewsCard = () => {
    return (
        <div>
            
            <div className={classes.card}>
                <div className={classes.cardTop}>
                    <div className={classes.row}>
                        <img className={classes.img} src={Avatar} />
                        <p className={classes.job}>Срочно нужен программист yii2</p>
                    </div>
                    <div className={classes.price}>
                        <p> 2 000 000  </p>
                        <p> 6 000 000 сум</p>
                    </div>
                    <div className={classes.date}>
                        <p> # 345 002</p>
                        <p>С: 28 июнь </p>
                        <p>По: 28 июль</p>
                    </div>
                    <button className={classes.firstBtn}><span></span>Поднять</button>
                    <button className={classes.secondBtn}><span></span>Рекламировать</button>
                    <button className={classes.btn}>
                        <img src={More} />
                    </button>
                </div>
                <div className={classes.cardBottom}>
                    <Link className={classes.static}>Статистика</Link>
                    <Link>Просмотры: 195</Link>
                    <Link>Тел.: 200 </Link>
                    <Link>В Избранном: 0</Link>


                </div>
            </div>
        </div>
    );
};


export default NewsCard;