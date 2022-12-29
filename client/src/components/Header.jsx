import React from 'react'

const Header = (props) => {
  return (
    <div className='text-center w-52 m-auto ' >
    <img width='200px' height="200px" src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' alt='header-img'/>
    <h3 >{props.headTitle}</h3>
    </div>
  )
}

export default Header;