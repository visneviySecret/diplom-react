import React from 'react'
import Item from './_Item'

export default function List(props){
    
    return (
        <div className="parameters-list">
            { props.items.map(item => <Item item={item} key={item.id} addTextToList={props.addTextToList} removeItem={props.removeItem}/>)}    
        </div>
    )
}