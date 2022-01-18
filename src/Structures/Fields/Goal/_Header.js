import React from 'react'
import imgInfo from '../../../images/info.svg'

export default function (){
    return (
        <div>
            <div className="title">
                <div className="title-name">Цель</div>
                <div className="team-info"data-title="напр.: Цель проекта-познать себя">
                    <img src={imgInfo} alt="information"/>
                </div> 
            </div>   
        </div>
    )
}