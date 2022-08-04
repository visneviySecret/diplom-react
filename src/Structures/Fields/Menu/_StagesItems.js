import React from 'react'
import imgEdit from '../../../images/edit.png'

export default function Stages({ data }) {

    return (
        <div className="blank box-1">
            <div className="title-head">Этапы
                <a href="Page_stages.html"><img src={imgEdit} alt="edit_button" className="edit" /></a>
            </div>
            <div className="blank-body">
                <div className="blank-header">
                    <div className="strings">Этапы проекта</div>
                    <div className="strings"> Сроки</div>
                    <div className="strings">Роли</div>
                </div>

                {data[0].map((stage, index) => <Stage iteration={index} tasks={stage.tasks} stage={stage} key={stage.id} />)}
            </div>
        </div>
    )
}

function Stage(props) {
    return (
        <>
            <div className="stages-name-string">{props.stage.title}</div>

            {props.tasks.map(task => <Task key={task.id} task={task} />)}

        </>
    )
}

function Task(props) {
    return (
        <>
            <div className="stages-data-string">
                <input type="checkbox" className="custom-checkbox" id={`box${props.task.id}`} name="box" value="yes" />
                <label htmlFor={`box${props.task.id}`}></label>
                <input type="text" placeholder="Задача" className="thin-text" />
                <input type="date" className="date" name="calendar" max="2030-01-01" min="2015-01-01" onKeyDown="return false" />
                <select name="role" className="touch-selector-mini">
                    <option value="value1"></option>
                    <option value="value1">Устроить хаос</option>
                    <option value="value1">Навестить порядок</option>
                </select>
            </div>
        </>
    )
}