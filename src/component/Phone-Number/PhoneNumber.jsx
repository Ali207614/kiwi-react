import React from 'react';
import classes from './phone.module.css'


class PhoneNumber extends React.Component {

    state = {
        isNumber: false
    }

  


    render() {
        return (
            <div className={classes.btn}>
                <p className={classes.text}>99891 166 {this.state.isNumber? '1667' : '****'}</p>
                <button onClick={()=> this.setState({isNumber : !this.state.isNumber})} className={classes.btnTwo}>{this.state.isNumber? 'Скирть' : 'Покозать польностю'}</button>
            </div>
        );
    }

};


export default PhoneNumber;