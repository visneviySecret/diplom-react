import React from 'react'
import Header from './_Header'
import AddFile from './_AddFile'
import List from './_List'

export default function Team(){
    const [files, setFiles] = React.useState([
        {id: 1, fileContent: ''},
        {id: 2, fileContent: ''},
    ])


function addNewFile(){
    setFiles(
    files.concat({id: Date.now(), fileContent: ''})
    )
}

function deleteFile(id){
    setFiles(files.filter(file => file.id !== id))
}

    return(
        <div className="main">
            <Header />
            <div className="files-body">
                <List files={files} deleteFile={deleteFile}/>
                <AddFile addFile={addNewFile} />
            </div>
        </div>
    )
}