import React from 'react'
import Item from './_Item'

export default function TeamList(props){
    return (
        <div className="list">
               {props.items.map((item, index) => <Item item={item} index={index} key={item.id} onCreate={props.onCreate} deleteItem={props.deleteItem}  onCreateTitle={props.onCreateTitle} onCreateQuant={props.onCreateQuant} onCreatePrice={props.onCreatePrice} onCreateHttp={props.onCreateHttp} />)}     
        </div>
    )
}