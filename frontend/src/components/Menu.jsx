import React from 'react'
import {posts} from '../data';

const Menu = () => {
  return (
    <div className="menu">
        <h1>Other Posts you may like</h1>
        {
            posts.map(post=>(
                <div className="post" key={post.id}>
                    <img src={post.img} alt="postimg"/>
                    <h2>
                        {post.title}
                    </h2>
                    <button>Read More</button>

                </div>
            ))
        }
    </div>
  )
}

export default Menu