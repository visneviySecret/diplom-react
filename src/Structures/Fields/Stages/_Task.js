import React, { useContext } from 'react'
import Context from './_Context'

export default function (props) {
    const { toggleTask} = useContext(Context)

    return(
        <div className="string">
        <input type="checkbox" className="custom-checkbox" id="checkbox1" name="box" onChange={() => {
            console.log(props.task)
            console.log(toggleTask(props.task.id))}}/>
        <label htmlFor="checkbox1"></label>
        <input type="text" placeholder="Задача" className="thin-text" id="task-table"/>
        <input type="date" className="date" name="calendar" max="2030-01-01" min="2015-01-01" />
        <select name="role" className="touch-selector-mini">
            <option value="value1"></option>
            <option value="value2">Устроить хаос</option>
            <option value="value3">Навестить порядок</option>
        </select>
    </div>    
    )
}