import React from 'react'
import imgEdit from "../../../images/edit.png"

export default function Problem({ data }) {

    return (
        <>
            <div className="blank box-2">
                <div className="title-head">Проблема
                    <a href="Page_problem.html"><img src={imgEdit} alt="edit_button" className="edit" /></a>
                </div>

                <div className="text-conteiner-short">
                    {data[2].map(item => <TextContainer data={item} key={item.id} />)}
                </div>
            </div>
        </>
    )
}

const TextContainer = ({ data }) => {
    var placeholder = 'Текст'

    if (data.textFill !== '') {
        placeholder = data.textFill
    }

    return (

        <textarea name="" id="" cols="30" rows="10" className="textarea-menu" placeholder={placeholder}></textarea>

    )
}