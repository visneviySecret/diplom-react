import React from 'react'
import imgPlus from '../../../images/mini_plus.svg'
import Task from './_Task'

export default function (props) {
    props.finalTasks.map((task) => console.log(task))
    return (
        <>
            <div className="structure-panele-move"> 
                <div className="structure-panel">
                {props.stages.title}
                </div>
            </div>

            <div className='stages-list'>
            {props.finalTasks.map((task) => <Task task={task} key={task.id} onChange={props.onToggle}/>)}     
        </div>

        <div className="stages-adder">
            <img src={imgPlus} alt="plus" className="mini-plus" onClick={() => props.addFinal(props.stages.id)}/>
        </div>     
        </>
    )
}