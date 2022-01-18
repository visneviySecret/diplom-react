import React, {useState} from 'react'
import imgPlus from "../../../images/mini_plus.svg"

export default function TeamAddPerson ({ onCreate }){
    const [value, setValue] = useState('')

    function submitHandler (event){
        event.preventDefault()
        if (value.trim()){
            onCreate(value)
            setValue('')
        }
    }
    
    return (
        <form className="parametr-adder" onSubmit={submitHandler}>
            <div className="combo">
                <div className="plus"><img src={imgPlus} alt="plus"/></div>
                <input type="text" placeholder="Введите область" className="block-input" 
                value={value} onChange={event => setValue(event.target.value)}
                maxLength="16"/>
            </div>
        </form>
    )
}