import React from 'react'
import imgIcon from "../../../images/icon.png"
import imgTrash from "../../../images/trash.svg"

const styles = {
    img: {
        width: '20px'
    }
}

export default function Person({ person, deletePerson }) {
    const classes = ['trash-bin-none']

    if (person.id > 2) { classes.push('trash-bin') }

    if (person.personName == "") {
        var placeholder = "Введите имя"
    }

    return (
        <div className="team-person file-load">
            <img src={imgIcon} alt="icon" />
            <input type="text" placeholder={placeholder} className="text team-text" />
            <select name="role" className="touch-selector team-selector">
                <option value="value1">Роль</option>
                <option value="value2">РОЛЬ1</option>
                <option value="value3">РОЛЬ2</option>
            </select>
            <img src={imgTrash} className={classes.join(' ')} style={styles.img} onClick={() => deletePerson(person.id)} />
        </div>
    )
}