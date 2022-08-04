import React from 'react'
import imgIcon from "../../../images/icon.png"
import imgTrash from "../../../images/trash.svg"

const styles = {
    img: {
        width: '20px'
    }
}

export default function Person({ person, deletePerson, updateName, updateRole, listLength }) {
    const classes = ['trash-bin-none']
    var placeholder = "Введите имя"

    if (listLength > 2) { classes.push('trash-bin') }

    if (person.name !== "") {
        placeholder = person.name
    } else {
    }

    const handleChangeName = event => {
        let currentName = event.target.value
        updateName(currentName, person.id)
    }
    const handleChangeRole = event => {
        let currentRole = event.target.value
        updateRole(currentRole, person.id)
    }


    return (
        <div className="team-person file-load">
            <img src={imgIcon} alt="icon" />
            <input
                type="text"
                placeholder={placeholder}
                value={person.name}
                className="text team-text"
                onChange={handleChangeName}
            />
            <select
                name="role"
                className="touch-selector team-selector"
                onChange={handleChangeRole}
                value={person.role}
            // selected={person.role == option.value}
            >
                <option value="value1">Роль</option>
                <option value="value2">РОЛЬ1</option>
                <option value="value3">РОЛЬ2</option>
            </select>
            <img src={imgTrash} className={classes.join(' ')} style={styles.img} onClick={() => deletePerson(person.id)} alt="trash bin" />
        </div>
    )
}