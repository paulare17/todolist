import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  function handleHome() {
    navigate("/")
  }

  return (
    <div>
      <nav className='navbar'>
        <h1 className="title"onClick={handleHome}>Tasques:</h1>
        <ul className='list-btn'>
          <li>
            <Link className='btn' to="/pendents">Pendents</Link>
          </li>
          <li>
            <Link className='btn' to="/acabades">Acabades</Link>
          </li>
        </ul>
        <button className='fosc'>🌙</button>
      </nav>
    </div>
  )
}
