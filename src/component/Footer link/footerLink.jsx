
import classes from './footerLink.module.css'
const FooterLink = ({ Img, info, name }) => {
    return (
        <button className={classes.row}>
            <div className={classes.img}>
                <img src={Img} />
            </div>
            <div className={classes.text}>
                <p className={classes.info}>{info}</p>
                <h5 className={classes.name}>{name}</h5>
            </div>
        </button>
    )
}

export default FooterLink;