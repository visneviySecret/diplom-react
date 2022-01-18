import React from 'react'
import imgInfo from '../../../images/info.svg'

export default function (){
    return (
        <div>
            <div className="title">
                <div className="title-name">Этапы </div>
                <div className="team-info"data-title="Напиши имена участников и выбери их роль">
                    <img src={imgInfo} alt="information"/>
                </div> 
            </div>   
        </div>
    )
}