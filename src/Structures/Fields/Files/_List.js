import React from 'react'
import File from './_File'

export default function FileList(props){
    return (
        <div className="files-list">
            { props.files.map(file =>{
                return <File file={file} key={file.id} deleteFile={props.deleteFile}/>
            })}        
        </div>
    )
}