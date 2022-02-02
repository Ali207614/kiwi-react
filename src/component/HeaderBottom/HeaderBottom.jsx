
import React from 'react';
import {Link} from "react-router-dom"
import "./main.css"


const HeaderBottom = ({activeHeader,setActiveHeader}) => {
  return (

    <div class="input-group">
         <select className="form-select">
            <option value="0">Любая категория</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
            <option value="3">Mers</option>

          </select>
       <input className="form-input" placeholder="Что будем искать" type="text"/>
       <select className="country-select">
            <option value="0">Любая категория</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
            <option value="3">Mers</option>
        </select>
        <Link to="/filter" className="find-btn" >
          Найти
        </Link>
    </div>
  );
};



export default HeaderBottom;