import React, {useState} from 'react'
import imgPlus from "../../../images/plus.png"
import imgTrash from "../../../images/trash.svg"

const styles = {
    img: {
        width: '20px',
        marginLeft: '28px'
    }
}

export default function Person({file, deleteFile}){
    const classes= ['trash-bin-none']
    const [title, setTitle] = useState('Загрузить файл')
    const fileInput = React.createRef()

    function handleSubmit(event){
        event.preventDefault()
        file.content = fileInput.current.files[0]
        setTitle('Файл загружен')
    }

    if (file.id > 2)
    {classes.push('trash-bin')}

    return (
        <div className="files-data file-load">
            <div className="plus"><img src={imgPlus} alt="plus" className="plus"/></div>
            <div className="input-wrapper">
                <input ref={fileInput} onChange={handleSubmit}name="file" type="file" name="file" id={`input-file${file.id}`} className="input input-file"/>
                <label htmlFor={`input-file${file.id}`} className="input-file-button">
                    <span className="input-file-button-text">{title}</span>
                </label>
            </div>
            <img className={classes} src={imgTrash} style={styles.img} onClick={()=>deleteFile(file.id)}/>
        </div>
    )
}