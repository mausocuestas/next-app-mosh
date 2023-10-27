import React from 'react'

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' }); // vai retornar um objeto
  const users: User[] = await res.json();

  return (
    <>
      <h1 className='font-semibold'>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
<br />
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage
