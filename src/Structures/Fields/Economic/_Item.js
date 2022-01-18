import React, {useState} from 'react'
import imgTrash from '../../../images/trash.svg'

const styles = {
    img: {
        width: '20px'
    }
} 

export default function ({ index, onCreateTitle, onCreateQuant, onCreatePrice, onCreateHttp, deleteItem, item}){
    const [value, setValue] = useState('')
    const classes = ['trash-bin-none']

    function submitHandlerTitle(text) { 
        onCreateTitle(text, item.id)
    }
    function submitHandlerQuant(text) {
        onCreateQuant(text, item.id)
    }

    function submitHandlerPrice(text) { 
        onCreatePrice(text, item.id)

    }
    function submitHandlerHttp(text) { 
        onCreateHttp(text, item.id)
    }

    if (index > 0) {
        classes.push('trash-bin')
    }

    

    return (
        <form className="economic-data-string form">
                        <div className="increment-number">{index+1}</div>                          
                        <div><input onChange={event => {submitHandlerTitle(event.target.value)}} type="text" placeholder="Имя" className="economic-data data-name"/></div>      
                        <div><input onKeyPress={event => 
                            !/\d+/.test(event.key) && event.preventDefault()}
                            onChange={event =>submitHandlerQuant(event.target.value) }
                           type="text" placeholder="шт." className="economic-data data-quantity"/></div>
                        <div><input onKeyPress={event => 
                            !/\d+/.test(event.key) && event.preventDefault()}
                            onChange={event => submitHandlerPrice(event.target.value)}
                             type="text" placeholder="руб" className="economic-data data-price"/></div>
                        <div><input onChange={event => {submitHandlerHttp(event.target.value)}}type="text" placeholder="http://" className="economic-data data-link"/></div>
                        <img src={imgTrash} style={styles.img} className={classes.join(' ')} onClick={()=>{deleteItem(item.id); submitHandlerPrice('')}}/>
        </form>    
    )
}