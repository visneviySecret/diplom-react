import React from 'react'
import imgPlus from "../../../images/mini_plus.svg"
import imgInfo from "../../../images/blue_info.svg"
import imgBin from "../../../images/trash.svg"

export default function Person({addTextToList, item, removeItem}){
    const classes = ['trash-bin-none']
    const infoClasses = ['info']

    if (item.id > 5) {
        classes.push('trash-bin')
        infoClasses.push('no-display')
    }

    return (
        <div className="combo">
            <div className="plus">
                <img src={imgPlus} alt="plus"/>
            </div>
            <div className="block-info" onClick={()=>{ addTextToList(item)} }>
                <div>{item.title}</div>
                <div className={infoClasses.join(' ')} data-title={item.info}>
                    <img src={imgInfo} alt="information"/>
                </div>
            </div>
            <img src={imgBin} className={classes.join(' ')} onClick={()=> removeItem(item)}/>
        </div>
    )
}