import React from 'react'
import Header from './_Header'
import AddPerson from './_AddPerson'
import List from './_List'
import {
    useQuery,
    useMutation,
} from '@apollo/client'
import { GetPersonsQuery, AddPersonQuery, DeletePersonsQuery, UpdatePersonQuery } from '../../../queries/TeamQueries'

function Team() {
    const { data } = useQuery(GetPersonsQuery)

    const [addPerson,
    ] = useMutation(AddPersonQuery,
        { refetchQueries: [{ query: GetPersonsQuery }, 'GetPersonsQuery'] }
    )
    const [updatePerson,
    ] = useMutation(UpdatePersonQuery,
        { refetchQueries: [{ query: GetPersonsQuery }, 'GetPersonsQuery'] }
    )
    const [deletePerson] = useMutation(DeletePersonsQuery,
        { refetchQueries: [{ query: GetPersonsQuery }, 'GetPersonsQuery'] }
    )

    function updateName(newName, id) {
        updatePerson({
            variables: {
                projectId: "test",
                id: id,
                name: newName
            }
        })
    }
    function updateRole(newRole, id) {
        updatePerson({
            variables: {
                projectId: "test",
                id: id,
                role: newRole
            }
        })
    }

    function addNewPerson() {
        addPerson({
            variables: {
                name: '',
                role: '',
                avatar: '',
                projectId: 'test',
            }
        })
    }

    function deletePersonHandler(id) {
        deletePerson({
            variables: {
                id: id
            }
        })
    }

    if (data) {
        let listLength = data.persons.length
        return (

            <div className="main" >
                <Header />
                <div className="table files-body">
                    <List persons={data.persons} deletePerson={deletePersonHandler} updateName={updateName} updateRole={updateRole} listLength={listLength} />
                    <AddPerson addPerson={addNewPerson} listLength={listLength} />
                </div>
            </div>
        )
    } else {
        return <div></div>
    }

}

export default Team