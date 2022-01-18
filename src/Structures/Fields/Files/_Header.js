import React from 'react'
import imgInfo from '../../../images/info.svg'

export default function (){
    return (
        <div>
            <div className="title">
                <div className="title-name">Файлы </div>
                <div className="team-info"data-title="Загрузи свой пароль">
                    <img src={imgInfo} alt="information"/>
                </div> 
            </div>   
        </div>
    )
}