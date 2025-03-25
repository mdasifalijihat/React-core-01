import React from 'react'

export default function Friend({friend}) {
    console.log(friend)

  return (
    <div className='card2'>
        <small> Id: {friend.id} </small>
        <h4> Name:{friend.name} </h4>
        <p> Email: {friend.email}</p>
        <p> UserName: {friend.username} </p>

    </div>
  )
}

// email
// : 
// "Lucio_Hettinger@annie.ca"
// id
// : 
// 5
// name
// : 
// "Chelsey Dietrich"
// phone
// : 
// "(254)954-1289"
// username
// : 
// "Kamren"
// website
// : 
// "demarco.info"