import { gql } from '@apollo/client'


const GetListQuery = gql`
  query GetListQuery {
    list {
      id
      title
      description
    }
  }
`

const GetExternalQuery = gql`
  query GetExternalQuery {
    external {
      id
      title
      faq
    }
  }
`
const AddListQuery = gql`
  mutation AddList
  ($title: String, $description: String, $projectId: ID! )
  {
    addList(title: $title, description: $description, projectId: $projectId )
    {
      title
    } 
 }`
const AddExternalQuery = gql`
  mutation AddExternal
  ($title: String, $description: String, $projectId: ID! )
  {
    addExternal(title: $title, description: $description, projectId: $projectId )
    {
      title
      description
    } 
 }`

const UpdateListlQuery = gql`
  mutation UpdateList
  ($projectId: ID!, $id: ID!, $description: String )
  {
    updateList(projectId: $projectId, id: $id, description: $description)
    {
      description
    } 
 }`

const DeleteListQuery = gql`
  mutation DeleteList
  ($id: ID!)
  {
    deleteList (id: $id)
    {
      title
    }
  }`
const DeleteExternalQuery = gql`
  mutation DeleteExternal
  ($id: ID!)
  {
    deleteExternal (id: $id)
    {
      title
    }
  }`

export {
  GetListQuery,
  GetExternalQuery,
  AddListQuery,
  AddExternalQuery,
  UpdateListlQuery,
  DeleteListQuery,
  DeleteExternalQuery
};