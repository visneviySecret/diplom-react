import React, {useState} from 'react'
import imgPlus from "../../../images/plus.png"


export default function AddPerson ({items, addItem}){
    return (
        <div className="adder">
            <div className="economic-data-string">
                <div><img src={imgPlus} alt="plus" className="plus-img"/></div>
                <div><button onClick={()=> addItem()}className="economic-data economic-button data-name">Добавить пункт</button></div>
            </div>
        </div>
    )
}