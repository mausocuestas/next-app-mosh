import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
  }

const UserTable = async () => {
    const UsersPage = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' }); // vai retornar um objeto
        const users: User[] = await res.json(); // json() produz um JS objeto e não um JSON string
  
        return (
    <table className='table table-bordered'>
    <thead>
     <tr>
       <th>Name</th>
       <th>Email</th>
     </tr>
    </thead>
    <tbody>
     {users.map(user => <tr key={user.id}>
       <th>{user.name}</th>
       <th>{user.email}</th>
     </tr>)}
    </tbody>
     <th></th>
   </table>
  )
}
}

export default UserTable