import React from 'react'
import Header from './_Header'
import AddPerson from './_AddPerson'
import List from './_List'

export default function Team({ data, setData }) {
    const [persons, setPersons] = React.useState([
        { id: 1, icon: {}, personName: '', role: '' },
        { id: 2, icon: {}, personName: '', role: '' },
    ])

    React.useEffect(() => {
        setData(data[1] = persons)
    }, [persons])


    function addNewPerson() {
        setPersons(
            persons.concat({ id: Date.now(), icon: {}, personName: '', role: '' })
        )

    }

    function deletePerson(id) {
        setPersons(persons.filter(person => person.id !== id))
    }

    return (
        <div className="main">
            <Header />
            <div className="table files-body">
                <List persons={persons} deletePerson={deletePerson} />
                <AddPerson props={persons} addPerson={addNewPerson} />
            </div>
        </div>
    )
}