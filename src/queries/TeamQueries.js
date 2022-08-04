import { gql } from '@apollo/client'


const GetPersonsQuery = gql`
  query GetPersonsQuery {
    persons {
      id
      name
      role
      avatar
    }
  }
`

const AddPersonQuery = gql`
  mutation AddPerson
  ($name: String, $role: String, $avatar: String, $projectId: ID! )
  {
    addPerson(name: $name, role: $role, avatar: $avatar, projectId: $projectId )
    {
      name
      role
      avatar
    } 
 }`

const UpdatePersonQuery = gql`
  mutation UpdatePerson
  ($projectId: ID!, $id: ID!, $name: String, $role: String, $avatar: String )
  {
    updatePerson(projectId: $projectId, id: $id, name: $name, role: $role, avatar: $avatar)
    {
      name
      role
      avatar
    } 
 }`

const DeletePersonsQuery = gql`
  mutation DeletePerson
  ($id: ID!)
  {
    deletePerson (id: $id)
    {
      name
    }
  }`

export {
  GetPersonsQuery,
  AddPersonQuery,
  UpdatePersonQuery,
  DeletePersonsQuery
};