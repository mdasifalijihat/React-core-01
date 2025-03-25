import React, { use } from 'react'

export default function Users({fetchUsers}) {

    const users = use(fetchUsers)
    console.log(users)
  return (
    <div className='card2'>
        Users: {users.length}

    </div>
  )
}

