import React from 'react'
import imgPlus from '../../../images/mini_plus.svg'
import Task from './_Task'

export default function Stages(props) {
    // props.tasks[props.iteration].map((task) =>task.map(item => console.log(item.id)))
    return (
        <div>
            <div className="structure-panele-move">
                <div className="structure-panel">
                    {props.stage.title}
                </div>
            </div>

            <div className='stages-list'>
                {props.tasks[props.iteration].map((task) => task.map(item => { return <Task task={item} key={item.id} onChange={props.onToggle} /> }))}
            </div>
            <div className="stages-adder">
                <img src={imgPlus} alt="plus" className="mini-plus" onClick={() => props.addTask(props.stage.id)} />
            </div>
        </div>
    )
}