import React from 'react'
import imgIcon from '../../../images/icon.png'

export default function Team({ data }) {

    return (
        <div className="blank box-1">
            <div className="title-head">
                Команда
            </div>
            <div className="team-body">
                <div className="team-main">
                    {data[1].map(item => <Items item={item} key={item.id} />)}
                </div>
            </div>
        </div>
    )
}

const Items = ({ item }) => {
    var name = 'Имя'
    var role = 'Роль'

    if (item.personName !== '') {
        name = item.personName
    }


    return (
        <div className="team-person">
            <div><img src={imgIcon} alt="icon.png of .svg" className="icon" /></div>
            <div><input type="text" className="person-status person-name" placeholder={name} /></div>
            <div><input type="text" className="person-status person-role" placeholder={role} /></div>
        </div>
    )
}