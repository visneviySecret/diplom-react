import React, {useState} from 'react'
import imgHomeButton from '../images/Home button.svg'

export default function Panel(props){
    
    return(
        <div className='panel'>
            <div>
                <img src={imgHomeButton} alt="Home button" className="homebutton"/>
            </div>
            <div >
                <input type="text" placeholder="Название проекта..." className="project-name"/>  
            </div>
            <div className="value">
                    {props.progress || 0}%
            </div>
            <div className="progress">
                <progress min="0" max="100" value={props.progress}></progress>
                <div className="progress-value"></div>
                <div className="progress-bg"><div className="progress-bar"></div></div>
            </div>    
        </div>
    )
}