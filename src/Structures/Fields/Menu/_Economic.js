import React from 'react'
import imgEdit from "../../../images/edit.png"

export default function Economic({ data }) {
    return (
        <>
            <div className="blank box-4">
                <div className="title-head">Экономика
                    <a href="Page_economic.html"><img src={imgEdit} alt="edit_button" className="edit" /></a>
                </div>
                <div className="economic-menu">
                    <div className="economic-title-menu">
                        <div className="strings">Название</div>
                        <div className="strings">Кол-во</div>
                        <div className="strings">Цена</div>
                        <div className="strings">Ссылка</div>
                    </div>
                    {data[6].map(item => <EconomicDataString data={item} key={item.id} />)}


                </div>
            </div>
        </>
    )
}

export function EconomicDataString({ data }) {

    var name = data.title || "Имя"
    var quantity = data.quantity || "шт."
    var coast = data.price || "руб."
    var http = data.http || "http://"


    return (
        <div className="economic-data-string-menu">
            <div className="increment-number-menu">{data.id}</div>
            <div><input type="text" placeholder={name} className="economic-data-menu data-name-menu" /></div>
            <div><input type="text" placeholder={quantity} className="economic-data-menu data-quantity-menu" /></div>
            <div><input type="text" placeholder={coast} className="economic-data-menu data-price-menu" /></div>
            <div><input type="text" placeholder={http} className="economic-data-menu data-link-menu" /></div>
        </div>
    )
}