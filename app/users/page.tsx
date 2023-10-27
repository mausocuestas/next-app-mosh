import React from 'react'

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' }); // vai retornar um objeto
  const users: User[] = await res.json();

  return (
    <>
      <h1 className='font-semibold'>Users</h1>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
<br />
      <table className='table table-bordered'>
       <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
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

    </>
  )
}

export default UsersPage
