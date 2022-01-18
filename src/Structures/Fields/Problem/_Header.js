import React from 'react'
import imgInfo from '../../../images/info.svg'

export default function (){
    return (
        <div>
            <div className="title">
                <div className="title-name">Проблемная область</div>
                <div className="team-info"data-title="Создай себе проблем">
                    <img src={imgInfo} alt="information"/>
                </div> 
            </div>   
        </div>
    )
}