import React from 'react'
import Person from './_Person'

export default function TeamList(props){
    return (
        <div className="person-list">
            { props.persons.map(person =>{
                return <Person person={person} key={person.id} deletePerson={props.deletePerson}/>
            })}        
        </div>
    )
}