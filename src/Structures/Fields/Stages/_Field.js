import React, { useState, useEffect } from 'react'
import Header from './_Header'
import Stage from './_Stage'
import Context from './_Context'
import Concept from './Concept'
import Develop from './Develop'
import Release from './Release'
import Final from './Final'

export default function Stages({ data, setData }) {
    const [stages, setStages] = React.useState(
        [
            { id: 0, title: 'I Концепция' },
            { id: 1, title: 'II Разработка' },
            { id: 2, title: 'III Реализация' },
            { id: 3, title: 'IV Завершение' }
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

    function toggleTask(id) {
        console.log(conceptTasks.filter(item => item.id === id).length)
    }
    function addConcept() {
        setConcept(
            conceptTasks.concat({ id: Date.now(), isChecked: false, task: '', term: '', roles: '' }))
        setData(data[0][0].tasks = conceptTasks)
    }
    function addDevelop() {
        setDevelop(
            developTasks.concat({ id: Date.now(), isChecked: false, task: '', term: '', roles: '' }))
        setData(data[0][1].tasks = developTasks)

    }
    function addRelease() {
        setRelease(
            releaseTasks.concat({ id: Date.now(), isChecked: false, task: '', term: '', roles: '' }))
        setData(data[0][2].tasks = releaseTasks)
    }
    function addFinal() {
        setFinal(
            finalTasks.concat({ id: Date.now(), isChecked: false, task: '', term: '', roles: '' }))
        setData(data[0][3].tasks = finalTasks)
    }

    return (
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
                <Final finalTasks={finalTasks} addFinal={addFinal} onToggle={toggleTask} stages={stages[3]} />

            </div>
        </Context.Provider>
    )
}