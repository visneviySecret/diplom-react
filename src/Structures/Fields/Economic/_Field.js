import React, { useEffect } from 'react'
import Header from './_Header'
import Add from './_Add'
import List from './_List'

export default function Economic({ data, setData }) {
    const [items, setItems] = React.useState([
        { id: 1, title: '', quantity: 0, price: 0, http: '' },
    ])
    const [total, setTotal] = React.useState(0)

    useEffect(() => {
        setData(data[6] = items)
    }, [items])

    function addNewItem() {
        var idCount = items.length + 1
        setItems(
            items.concat({ id: idCount, title: '', quantity: 0, price: 0, http: '' }))
    }

    function deleteItem(id) {
        setItems(items.filter(item => item.id !== id))
    }

    function writeTitle(value, id) {
        items.map((item) => {
            if (item.id == id) { item.title = value }
        })
    }

    function writeQuantity(value, id) {
        items.map((item) => {
            if (item.id == id) { item.quantity = value }
        })
    }

    function writePrice(value, id) {

        items.map((item) => {
            if (item.id == id) { item.price = value }
        })

        let array = items.map(item => Number(item.price))
        setTotal(array.reduce((total, amount) => total + (amount)))
    }
    function writeHttp(value, id) {
        items.map((item) => {
            if (item.id == id) { item.http = value }
        })
    }

    return (
        <div className="main">
            <Header />
            <div className="economic-page">
                <div className="economic-title">
                    <div className="strings">Название</div>
                    <div className="strings">Кол-во</div>
                    <div className="strings">Цена</div>
                    <div className="strings">Ссылка</div>
                </div>
                <List items={items} onCreateTitle={writeTitle} onCreateQuant={writeQuantity} onCreatePrice={writePrice} onCreateHttp={writeHttp} deleteItem={deleteItem} total={total} />
                <Add addItem={addNewItem} listLength={items.length} />
            </div>

            <div className="economic-total economic-total-block">
                <div className="total-block total">
                    Итого:
                </div>
                <div className="total-block summ">
                    {total || 'Сумма'}
                </div>
            </div>
        </div>
    )
}