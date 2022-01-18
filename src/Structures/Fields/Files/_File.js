import React from 'react'
import imgPlus from "../../../images/plus.png"
import imgTrash from "../../../images/trash.svg"

const styles = {
    img: {
        width: '20px'
    }
}

export default function Person({file, deletefile}){
    const classes= ['trash-bin-none']

    if (file.id > 2)
    {classes.push('trash-bin')}

    return (
        <div className="files-data file-load">
            <div className="plus"><img src={imgPlus} alt="plus" className="plus"/></div>
            <button className="small-data">Загрузить файл
                        <div className="filler-block"></div>
                        <div className="background-data"></div>
                    </button>
        </div>
    )
}