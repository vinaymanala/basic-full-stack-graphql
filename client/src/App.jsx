
import { useState } from 'react'
import './App.css'
import {useQuery, useMutation, gql} from '@apollo/client'


const GET_USERS = gql`
query GetUsers{
  getUsers {
    age
    name 
    isMarried
  }
}`

const GET_USER_BY_ID = gql`
query GetUserById($id: ID!){
  getUserById(id: $id){
    age
    name
    isMarried
  }
}`

const CREATE_USER = gql`
mutation CreateUser($name: String!, $age: Int!, $isMarried: Boolean!){
  createUser(name: $name, age: $age, isMarried: $isMarried){
    name
  }
}`
function App() {
  const {data : usersData, error : usersDataError, loading : usersDataLoading} = useQuery(GET_USERS)
  const {data: userByIdData, error: userByIdDataError, loading: userByIdDataLoading} = useQuery(GET_USER_BY_ID, {variables: {id: "3"}})
  const [createUser] = useMutation(CREATE_USER)
  const [newUser, setNewUser] = useState({})
  if (usersDataLoading){
    return <p>Loading...</p>
  }

  if (usersDataError){
    return <p>Error:{error.message}</p>
  }

  const handleCreateUser = async () => {
    console.log(newUser);
    await createUser({variables: {name: newUser.name, age: Number(newUser.age), isMarried: false}})
  }
  return (
    <>
    <>
    <label htmlFor="name">Name</label>
    <input id='name' type="text" value={newUser.name} onChange={(e) =>setNewUser(prev => ({...prev, name: e.target.value}))}/>
    <label htmlFor="age">Age</label>
    <input id='age' type="number" value={newUser.age} onChange={(e) =>setNewUser(prev => ({...prev, age: e.target.value}))} />    
    <button type='submit'  onClick={handleCreateUser}>Create user</button>
    </>
    <h1>Chosen user: {userByIdDataLoading ? <p>Loading user...</p> : userByIdData.getUserById.name}</h1>
    <div>{usersData.getUsers.map(user => (
      <>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>isMarried: {user.isMarried.toString()}</p>
      </>
    ))}</div>
    </>
  )
}

export default App
