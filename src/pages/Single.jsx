import React from 'react'
import user from '../imgs/harsh.png';
import edit from '../imgs/edit.png';
import del from '../imgs/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src={user} alt="user" />
          <div className="info">
            <span>Harshvardhan</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link className='link' to={`/write?edit=2`}>
              <img src={edit} alt="edit" />
            </Link>
            <Link className='link' to="/">
              <img src={del} alt="delete" />
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
         <p>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maxime laudantium accusamus, eius ex expedita perferendis rem quibusdam temporibus nisi quos, incidunt sapiente aliquam architecto? Aliquam animi asperiores dolorum facilis.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit nihil tenetur iusto odit error debitis non aut. Quasi alias velit fugit voluptate itaque possimus numquam accusamus pariatur aliquid ipsa.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis aliquid perferendis, laboriosam expedita necessitatibus optio maxime minima quos aliquam! In nemo labore similique quasi aut dolor quibusdam nostrum reiciendis cupiditate.

        </p>
        <br/>
        <br/>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maxime laudantium accusamus, eius ex expedita perferendis rem quibusdam temporibus nisi quos, incidunt sapiente aliquam architecto? Aliquam animi asperiores dolorum facilis.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit nihil tenetur iusto odit error debitis non aut. Quasi alias velit fugit voluptate itaque possimus numquam accusamus pariatur aliquid ipsa.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis aliquid perferendis, laboriosam expedita necessitatibus optio maxime minima quos aliquam! In nemo labore similique quasi aut dolor quibusdam nostrum reiciendis cupiditate.
          
        </p>
        <br/>
        <br/>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maxime laudantium accusamus, eius ex expedita perferendis rem quibusdam temporibus nisi quos, incidunt sapiente aliquam architecto? Aliquam animi asperiores dolorum facilis.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit nihil tenetur iusto odit error debitis non aut. Quasi alias velit fugit voluptate itaque possimus numquam accusamus pariatur aliquid ipsa.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis aliquid perferendis, laboriosam expedita necessitatibus optio maxime minima quos aliquam! In nemo labore similique quasi aut dolor quibusdam nostrum reiciendis cupiditate.
          
        </p>
         </p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single