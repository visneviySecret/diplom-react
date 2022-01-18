import React, {useState} from 'react'
import imgPlus from "../../../images/plus.png"

export default function AddPerson (props){
    
    return (
        <div className="person-adder">
                    <div className="team-plus-button file-add">
                        <div><img src={imgPlus} alt="plus" className="plus"/></div>
                        <div className="plus-button" >
                            <button className="button" onClick={()=> {props.addPerson()}}>Добавить участника</button>
                        </div>
                    </div>
        </div>
    )
}