import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function DeleteSchool({nameSchool, idSchool, idEmail, cancelledButton}) {

    

    const deleteSchool = async(idschool) => {
        axios.post('http://localhost:3000/deleteschool', {
            idschool
        }).then(response => console.log(response))
    }

    
    
  return (
    <section className='bg-white text-xl  z-[10] w-screen top-0 left-0 absolute h-screen flex items-center justify-center'>
        <div>
            <h1>Faça a confirmação que você está excluindo a escola:</h1>
            <p className='font-bold'>{nameSchool}</p>
            <p>Id:{idSchool}</p>
            <p>Email: {idEmail}</p>
            <div>
                <button onClick={cancelledButton}>Cancelar</button>
                <button onClick={() => {
                    deleteSchool(idSchool)
                }}>Confirmar</button>
            </div>
        </div>
    </section>
  )
}
