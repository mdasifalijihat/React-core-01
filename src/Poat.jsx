import React, { use } from 'react'
import Posts from './Posts'

export default function Poat({postsPromise}) {

    const posts = use(postsPromise)
    console.log(posts)

  return (
    <div>
        <h2> All Post are here: {posts.length} </h2>
        {
            posts.map(post => <Posts key={post.id} post={post}></Posts>)
        }
    </div>
  )
}
