import React from 'react'
import imgInfo from '../../../images/info.svg'

export default function (){
    return (
        <div>
            <div className="title">
                <div className="title-name">MVP </div>
                <div className="team-info"data-title="Mose valur Parabeluh">
                    <img src={imgInfo} alt="information"/>
                </div> 
            </div>   
        </div>
    )
}