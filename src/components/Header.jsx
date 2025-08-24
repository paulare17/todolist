import React from 'react'

export default function Header() {
  return (
    <div>
      <nav className='navbar'>
      <h1>Tasques:</h1>
        <ul className='list-btn'>
            <li><button className='btn' type="button">Pendents</button></li>
            <li><button className='btn' type="button">Acabades</button></li>
            <li><button className='btn' type="button">Llistat complet</button></li>
        </ul>
        <button className='fosc'>🌙 </button>
      </nav>
    </div>
  )
}
