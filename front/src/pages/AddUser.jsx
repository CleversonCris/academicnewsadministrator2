import React, { useState } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
export default function AddUser() {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState(null)
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:3000/createschool', {
        name,
        password,
        email
    })

    setMsg(response.data.msg)
  }

  return (
    <>
    <NavBar/>
    <section className='flex flex-col gap-4 justify-center items-center h-screen'>
        <h1 className='text-2xl'>Cadastrar uma nova escola</h1>
        <form onSubmit={handleSubmit} action="" className='max-w-xl p-4 border-2 border-black flex flex-col gap-2'>
            <label htmlFor="" className='flex flex-col gap-1'>
                <span>Nome:</span>
                <input className='border-2' type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}/>
            </label>
            <label htmlFor="" className='flex flex-col gap-1'>
                <span>Email:</span>
                <input className='border-2' type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>
            </label>
            <label htmlFor="" className='flex flex-col gap-1'>
                <span>Senha:</span>
                <input type="text" className='border-2'
                onChange={(e) => setPassword(e.target.value)}
                value={password}/>
            </label>
            <button className='bg-black h-10 text-white'>Cadastrar Escola</button>
            {msg !== null && <button>{msg}</button>}
        </form>
    </section>
    </>
  )
}
