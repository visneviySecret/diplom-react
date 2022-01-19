import React, {useState} from 'react'
import Header from './_Header'
import Stage from './_Stage'
import Context from './_Context'
import Concept from './Concept'
import Develop from './Develop'
import Release from './Release'
import Final from './Final'

export default function (){
    const [stages, setStages] = React.useState(
        [
            {id: 0, title: 'I Концепция', tasks: [{id: 0, isChecked: false, task: '', term: '', roles: ''}] },
            {id: 1, title: 'II Разработка', tasks: [{id: 1, isChecked: false, task: '', term: '', roles: ''}] },
            {id: 2, title: 'III Реализация', tasks: [{id: 2, isChecked: false, task: '', term: '', roles: ''}] },
            {id: 3, title: 'IV Завершение', tasks: [{id: 3, isChecked: false, task: '', term: '', roles: ''}] }
                        ]
    )
    const [conceptTasks, setConcept] = React.useState(
        [
            { id: 0, isChecked: false, task: '', term: '', roles: '' },
        ]
    )
    const [developTasks, setDevelop] = React.useState(
        [
            { id: 1, isChecked: false, task: '', term: '', roles: '' },
        ]
    )
    const [releaseTasks, setRelease] = React.useState(
        [
            { id: 2, isChecked: false, task: '', term: '', roles: '' },
        ]
        
    )
    const [finalTasks, setFinal] = React.useState(
        [
            { id: 3, isChecked: false, task: '', term: '', roles: '' },
        ]  
    )
    const [tasks, setTasks] = useState([conceptTasks, developTasks, releaseTasks, finalTasks])

    function toggleTask (id){
        console.log('tasks.id: ', id)
        /*setStages(
            stages.tasks.map(task => {
                if (task.id === id) {
                    task.isChecked = !task.isChecked
                }
            })
            )*/
    }
    function addConcept (){
            setConcept(
            conceptTasks.concat({id: Date.now(), isChecked: false, task: '', term: '', roles: ''}))
    }
    function addDevelop (){
        setDevelop(
        developTasks.concat({id: Date.now(), isChecked: false, task: '', term: '', roles: ''}))
    }
    function addRelease (){
        setRelease(
        releaseTasks.concat({id: Date.now(), isChecked: false, task: '', term: '', roles: ''}))
    }
    function addFinal (){
        setFinal(
        finalTasks.concat({id: Date.now(), isChecked: false, task: '', term: '', roles: ''}))
}

    return(
    <Context.Provider value={{ toggleTask }}>
        <div className="main">
            <Header />
            <div className="stages-tittles"> 
                <div className="strings">
                     Этапы проекта 
                </div>        
                 <div className="stages-tittle strings">
                     Сроки 
                </div> 
                <div className="strings">
                     Роли
                </div> 
            </div>  

                <Concept conceptTasks={conceptTasks} addConcept={addConcept} onToggle={toggleTask} stages={stages[0]} />
                <Develop developTasks={developTasks} addDevelop={addDevelop} onToggle={toggleTask} stages={stages[1]} />
                <Release releaseTasks={releaseTasks} addRelease={addRelease} onToggle={toggleTask} stages={stages[2]} />
                <Final finalTasks={finalTasks} addFinal={addFinal} onToggle={toggleTask} stages={stages[3]}/>

                
                

        </div>
    </Context.Provider>
    )
}
//{stages.map((stage, index) => <Stage iteration={index} tasks={tasks} stage={stage} key={stage.id} addTask={addTask} onToggle={toggleTask} />)}