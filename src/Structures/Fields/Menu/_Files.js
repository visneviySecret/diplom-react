import React from 'react'
import imgEdit from "../../../images/edit.png"

export default function Files({ data }) {
    return (
        <>
            <div className="blank box-5">
                <div className="title-head">Презентация
                    <a href="Page_files.html"><img src={imgEdit} alt="edit_button" className="edit" /></a>
                </div>

                {data[7].map(item => < File data={item} key={item.id} />)}

            </div>
        </>
    )
}

export const File = ({ data }) => {
    return (
        <div className="file-conteiner">
            <div className="file-box">{data.content.name || "Файл"}</div>
        </div>
    )
}