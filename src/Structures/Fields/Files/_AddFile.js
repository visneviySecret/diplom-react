import React from 'react'
import imgPlus from "../../../images/plus.png"

export default function AddFile (props){
    
    function onHandler(){
        props.addFile()
       
    }

    return (
        <div className="files-data file-add">
                    <div className="plus"><img src={imgPlus} alt="plus" className="plus"/></div>                                
                    <button className="add-data" onClick={()=> onHandler()}>Добавить пункт</button>
                </div>
    )
}