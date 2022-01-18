import React from 'react'
import Header from './_Header'
import imgInfo from '../../../images/info.svg'

const styles = {
    input: {
        marginLeft: '30px',
        marginTop: '60px',
        marginBottom: '30px'
    }
}

export default function () {
    return (
        <div className="main">
            <Header />
            <div className="pattern-title strings">Шаблон MVP<div className="team-info"data-title="Используй подсказки для заполнения или не используй"><img src={imgInfo} alt="information"/></div> </div>
            <form className="pattern">
               <div className="strings child"> Это </div>
               <div className="child">
            <input type="text" placeholder="сервис, приложение, объект" className="text-small"/>
               </div>
            <select name="which" className="touch-selector child">
                   <option value="value">который</option>
                   <option value="value1">которая</option>
                   <option value="value2">которые</option>
                   <option value="value3">которое</option>
               </select>
            <select name="Help" className="touch-selector child">
                   <option value="value">помогает</option>
                   <option value="value1">помогают</option>
                   <option value="value2">помогага</option>
                   <option value="value3">помощьь</option>
               </select>
            <input type="text" placeholder="кому" className="mini-text child"/>
               <div className="strings child">решить проблему, при помощи</div>
            <input type="text" placeholder="решение" className="mini-text child"/>
               <div className="strings child">и даёт</div>
            <input type="text" placeholder="выгода, ценность для клиента" className="text-small child"/>
            </form>
            <div className="pattern-title strings">MVP</div>
            <textarea name="area" id="" cols="30" rows="10" placeholder="Текст" className="pattern-title textarea"></textarea>
            
            <input type="submit" className='button' style={styles.input}/>
        </div>
    )
} 