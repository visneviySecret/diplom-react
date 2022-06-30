import React, { useState } from 'react'
import Header from './_Header'
import AddItem from './_AddItem'
import ItemList from './_ItemList'
import TextList from './_TextList'
import imgInfo from '../../../images/info.svg'


export default function ({ data, setData }) {
    const [items, setItems] = React.useState(
        [
            { id: 2, title: 'ЦА', info: 'человек', textFill: '' },
            { id: 3, title: 'Сроки', info: 'но паук', textFill: '' },
            { id: 4, title: 'Показатели', info: 'и к тому же', textFill: 'Т' }
        ]
    )
    const [textItems, setTexts] = React.useState(
        [
            { id: 1, title: 'Цель', info: 'без него мы как без рук', textFill: '' }
        ]
    )
    React.useEffect(() => {
        setData(data[3] = textItems)
    }, [textItems])

    function addItem(title) {
        setItems(items.concat
            ([{ id: Date.now(), title, info: '', textFill: '' }]),
        )
    }

    function removeItem(item) {
        setItems(items.filter((element) => element !== item))
    }

    function addTextToList(item) {
        setItems(items.filter((element) => element !== item),
            setTexts(textItems.concat([{
                id: item.id, title: item.title, info: item.info, textFill: ''
            }]))
        )
    }

    function backToItemList(textItem) {
        setTexts(textItems.filter((element) => element !== textItem),
            setItems(items.concat([{
                id: textItem.id, title: textItem.title, info: textItem.info, textFill: ''
            }])))
    }

    function textFiller(text, id) {

        textItems.map(item => { if (item.id == id) { item.textFill = text } })
    }



    return (
        <div className="main">
            <Header />
            <div className="problem">
                <div className="card-left-smart">
                    <div className="strings">Цель по S.M.A.R.T. <div className="team-info" data-title="small male art in right time"><img src={imgInfo} alt="information" /></div></div>

                    <div className="combo">
                        <div className="litter">S</div>
                        <div><input type="text" placeholder="Текст" className="text-smart" /></div>
                    </div>
                    <div className="combo">
                        <div className="litter">M</div>
                        <div><input type="text" placeholder="Текст" className="text-smart" /></div>
                    </div>
                    <div className="combo">
                        <div className="litter">A</div>
                        <div><input type="text" placeholder="Текст" className="text-smart" /></div>
                    </div>
                    <div className="combo">
                        <div className="litter">R</div>
                        <div><input type="text" placeholder="Текст" className="text-smart" /></div>
                    </div>
                    <div className="combo">
                        <div className="litter">T</div>
                        <div><input type="text" placeholder="Текст" className="text-smart" /></div>
                    </div>


                    <TextList textItems={textItems} backToItemList={backToItemList} textFiller={textFiller} />
                </div>

                <div className="card-right">
                    <div className="strings combo-label">Добавить</div>
                    <ItemList items={items} addTextToList={addTextToList} removeItem={removeItem} textFiller={textFiller} />
                    <AddItem onCreate={addItem} />
                </div>
            </div>
        </div>
    )
}