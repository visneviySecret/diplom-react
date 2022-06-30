import React, { useEffect } from 'react'
import Header from './_Header'
import AddFile from './_AddFile'
import List from './_List'

export default function Files({ data, setData }) {
    const [files, setFiles] = React.useState([
        { id: 1, content: '' },
        { id: 2, content: '' },
    ])

    useEffect(() => {
        setData(data[7] = files)
    }, [files])

    function addNewFile() {
        setFiles(
            files.concat({ id: Date.now(), content: '' })
        )
    }

    function deleteFile(id) {
        setFiles(files.filter(file => file.id !== id))
    }

    return (
        <div className="main">
            <Header />
            <div className="files-body">
                <List files={files} deleteFile={deleteFile} />
                <AddFile addFile={addNewFile} />
            </div>
        </div>
    )
}