import React from 'react'
import imgInfo from '../../../images/info.svg'

export default function (){
    return (
        <div>
            <div className="title">
                <div className="title-name">Экономика </div>
                <div className="team-info"data-title="...у слоника">
                    <img src={imgInfo} alt="information"/>
                </div> 
            </div>   
        </div>
    )
}