import React, { useState, useEffect } from 'react'
import Header from './_Header'
import AddItem from './_AddItem'
import ItemList from './_ItemList'
import TextList from './_TextList'


export default function Problem({ data, setData }) {
    const [problems, setProblems] = React.useState(
        [
            { id: 2, title: 'Решение', info: 'человек', textFill: '' },
            { id: 3, title: 'Аналоги', info: 'но паук', textFill: '' },
            { id: 4, title: 'Актуальность', info: 'и к тому же', textFill: 'Т' },
            { id: 5, title: 'Опрос', info: 'пук', textFill: '' }
        ]
    )
    const [textProblems, setTexts] = React.useState(
        [
            { id: 1, title: 'Проблема', info: 'без него мы как без рук', textFill: '' }
        ]
    )

    useEffect(() => {
        setData(data[2] = textProblems)
    }, [textProblems])

    function addItem(title) {
        setProblems(problems.concat
            ([{ id: Date.now(), title, info: '', textFill: '' }]),
        )
    }

    function removeItem(item) {
        setProblems(problems.filter((element) => element !== item))
    }

    function addTextToList(item) {
        setProblems(problems.filter((element) => element !== item),
            setTexts(textProblems.concat([{
                id: item.id, title: item.title, info: item.info, textFill: ''
            }]))
        )
    }

    function backToItemList(textItem) {
        setTexts(textProblems.filter((element) => element !== textItem),
            setProblems(problems.concat([{
                id: textItem.id, title: textItem.title, info: textItem.info, textFill: ''
            }])))
    }

    function textFiller(text, id) {
        console.log(textProblems[0].textFill)
        textProblems.map(item => { if (item.id == id) { item.textFill = text } })
    }



    return (
        <div className="main">
            <Header />
            <div className="problem">
                <div className="card-left">
                    <TextList textItems={textProblems} backToItemList={backToItemList} textFiller={textFiller} />
                </div>
                <div className="card-right">
                    <div className="strings combo-label">Добавить</div>
                    <ItemList items={problems} addTextToList={addTextToList} removeItem={removeItem} textFiller={textFiller} />
                    <AddItem onCreate={addItem} />
                </div>
            </div>
        </div>
    )
}