import React from 'react'
import Header from './_Header'
import AddPerson from './_AddPerson'
import List from './_List'

export default function Team(){
    const [persons, setPersons] = React.useState([
        {id: 1, icon: {}, personName: 'Введите имя', role: 'value1'},
        {id: 2, icon: {}, personName: 'Введите имя', role: 'value1'},
    ])


function addNewPerson(){
    setPersons(
    persons.concat({id: Date.now(), icon: {}, personName: 'Введите имя', role: 'value1' })
    )
}

function deletePerson(id){
    setPersons(persons.filter(person => person.id !== id))
}

    return(
        <div className="main">
            <Header />
            <div className="table files-body">
                <List persons={persons} deletePerson={deletePerson}/>
                <AddPerson props={persons} addPerson={addNewPerson} />
            </div>
        </div>
    )
}