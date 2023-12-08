import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <nav className='flex justify-center h-16 items-center border-b-2 border-black'>
        <ul className='flex gap-4 text-xl'>
            <li className='border-2 border-black px-4'>
                <Link to='/'>Escolas</Link>
            </li>
            <li className='border-2 border-black px-4' >
                <Link to='/adduser'>Cadastrar Escola</Link>
            </li>
        </ul>
    </nav>
  )
}
