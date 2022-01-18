import React from 'react'
import TextItem from './_TextItem'

export default function({textItems, backToItemList, textFiller}){
    return(
        <div className="text-list">
            { textItems.map(textItem => <TextItem textItem={textItem} key={textItem.id} backToItemList={backToItemList} textFiller={textFiller}/>)}           
        </div>
    )
}