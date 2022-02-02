
import React from 'react';
import CountDown from '../../component/CountDown/CountDown';
import NewsCard from '../../component/NewsCard/NewsCard';
import classes from './news.module.css'

const News = () => {
    return (
        <>
   
            <div className={classes.wrapper}>
            <div className='container'>
                <div className={classes.head}>
                    <div className={classes.firstDiv}>
                        <p>Фото</p>
                        <p>Название</p>
                    </div>
                    <div className={classes.secondDiv}>
                        <p>Цена </p>
                        <p>Дата</p>
                        <p>Действие</p>
                    </div>
                </div>
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>

        </>
    );
};


export default News;