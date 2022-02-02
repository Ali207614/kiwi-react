


import kivi from '../../assets/img/kivi.png'
import classes from './RegisterRight.module.css'

const RegisterRight = () => {
    return (
        <div className={classes.right}>
            <div className={classes.kivi}>
                <img src={kivi}/>
                <p>Откройте для себя целую плошадкудля продаже</p>
                <button>Как это делать?</button>
            </div>
        </div>
    )
}

export default RegisterRight;