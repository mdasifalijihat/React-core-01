import React from 'react'

export default function Posts({post}) {

  return (
    <div className='card2'>
        <p> title:  {post.title} </p>
        <p> {post.body} </p>
        </div>
  )
}
