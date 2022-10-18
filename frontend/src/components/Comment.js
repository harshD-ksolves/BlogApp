import React from 'react'

const Comment = () => {
  return (
    <div className="comment">
        <div className="comment-heading">
            <div className="comment-info">
               <span className="author">Harshvardhan </span> 
                posted at 18 oct 2022
            </div>
        </div>
        <div className="comment-body">
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero culpa dolorem magni! Laboriosam aliquid repudiandae consequatur. Sequi minima ad sit quaerat quas adipisci nostrum, modi vitae harum voluptatibus repudiandae obcaecati?
            </span>
            <span className="actions">
                <button>reply</button>
                <button>edit</button>
                <button>delete</button>
            </span>
            
        </div>
        <div className="replies">

        </div>
    </div>
  )
}

export default Comment;