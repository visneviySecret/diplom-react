import React from 'react'
import imgHomeButton from '../images/Home button.svg'

export default function Panel(){
    return(
        <div className='panel'>
            <div>
                <img src={imgHomeButton} alt="Home button" className="homebutton"/>
            </div>
            <div >
                <input type="text" placeholder="Название проекта..." className="project-name"/>  
            </div>
            <div className="value">
                    60%
            </div>
            <div className="progress">
                <progress min="0" max="100" value="60"></progress>
                <div className="progress-value"></div>
                <div className="progress-bg"><div className="progress-bar"></div></div>
            </div>    
        </div>
    )
}