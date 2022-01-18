import React, {useState} from 'react'
import Header from './_Header'
import Stage from './_Stage'
import Context from './_Context'

export default function (){
    const [stages, setStages] = React.useState(
        [
            {id: 0, title: 'I Концепция', tasks: [{id: 0, completed: false, task: '', term: '', roles: ''}] },
            {id: 1, title: 'II Разработка', tasks: [{id: 1, completed: false, task: '', term: '', roles: ''}] },
            {id: 2, title: 'III Реализация', tasks: [{id: 2, completed: false, task: '', term: '', roles: ''}] },
            {id: 3, title: 'IV Завершение', tasks: [{id: 3, completed: false, task: '', term: '', roles: ''}] }
                        ]
    )
    function toggleTask (id){
        console.log('tasks.id: ', id)
        /*setStages(
            stages.tasks.map(task => {
                if (task.id === id) {
                    task.completed = !task.completed
                }
            })
            )*/
    }
    function addTask (id){
        console.log('stages.id: ', stages[id].tasks)
        setStages(
            stages.map(stage => {
                if (stage.id == id){
                    console.log(id)//stage.tasks.concat({id: Date.now(), completed: false, task: '', term: '', roles: ''})
                }
            }))
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

            {stages.map(stage => <Stage stage={stage} key={stage.id} addTask={addTask} onToggle={toggleTask}/>)}

        </div>
    </Context.Provider>
    )
}