import React, {useState} from 'react'
import imgTrash from '../../../images/cross.svg'

export default function({textItem, backToItemList, textFiller}){
    const classes = ['no-cross']
    const [value, setValue] = useState('')

    if (textItem.id > 1) {
        classes.push('cross')
    }

    function submitHandler (text){
        textFiller(text, textItem.id)
    }
    
    return(
        <div className="text-area-block">
            <div className="strings">{textItem.title}</div>
            <textarea name="area" id="" cols="30" rows="10" placeholder="Текст" className="textarea"
            onChange={event => submitHandler(event.target.value)}></textarea>
            <img src={imgTrash} className={classes.join(' ')} onClick={()=>backToItemList(textItem)}/>
        </div>
    )
}
