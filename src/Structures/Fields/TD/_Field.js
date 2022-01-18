import React, {useState} from 'react'
import Header from './_Header'
import AddItem from './_AddItem'
import ItemList from './_ItemList'
import TextList from './_TextList'


export default function (){
    const [items, setItems] = React.useState(
        [
            {id: 2, title: 'Решение', info: 'человек', textFill: ''},
            {id: 3, title: 'Оборудованние', info: 'но паук', textFill: ''},
            {id: 4, title: 'Материалы', info: 'и к тому же', textFill: 'Т'},
            {id: 5, title: 'Аналоги', info: 'пук', textFill: ''},
            {id: 6, title: 'Схема', info: 'он же жук', textFill: ''}
        ]
    )
    const [textItems, setTexts] = React.useState(
        [
        {id: 1, title: 'Техническое решение', info: 'без него мы как без рук', textFill: ''}
        ]
    )

    function addItem(title) {
        setItems(items.concat
            ([{id: Date.now(), title, info: '', textFill: ''}]),   
        )
    }

    function removeItem(item) {
        setItems(items.filter((element) => element !== item))
    }

    function addTextToList(item){
        setItems(items.filter((element) => element !== item ),
        setTexts(textItems.concat([{
            id: item.id, title: item.title, info: item.info, textFill: ''
        }]))
        )
    }

    function backToItemList(textItem){
        setTexts(textItems.filter((element) => element !== textItem ),
        setItems(items.concat([{
            id: textItem.id, title: textItem.title, info: textItem.info, textFill: ''
        }])))
    }

    function textFiller(text, id){
        console.log(textItems[0].textFill)
        textItems.map(item => {if (item.id == id){item.textFill = text}})
    }

    
    
    return(
        <div className="main">
            <Header />
            <div className="problem">
                <div className="card-left">
                    <TextList textItems={textItems} backToItemList={backToItemList} textFiller={textFiller}/>
                </div>
                <div className="card-right">
                    <div className="strings combo-label">Добавить</div>
                    <ItemList items={items} addTextToList={addTextToList} removeItem={removeItem} textFiller={textFiller}/>
                    <AddItem onCreate={addItem}/>
                </div>
            </div>
        </div>
    )
}