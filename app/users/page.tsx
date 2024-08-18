import React from 'react'
interface User {
    id: number
    name: string
    email: string
    }
const UsersPage = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users:User[] = await res.json()

    return (
    
    <>
    {users.map((user) => (
        <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p> 
        </div>
    ))}
    </>
  )
}   

export default UsersPage
