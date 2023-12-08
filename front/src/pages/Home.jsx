import axios from "axios"
import { useEffect, useState } from "react"
import { IoIosRemoveCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import DeleteSchool from "../components/DeleteSchool";
import NavBar from "../components/NavBar";
export default function Home() {
  const [schools, setSchools] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/getschools')
    .then(response => setSchools(response.data.schools))
  }, [])

  const [search, setSearch] = useState("asda")
  
  const [modalDelete, setModalDelete] = useState(false)

  return (
    <>
    <NavBar/>
    <section className={`h-screen flex-col gap-4 flex justify-center items-center`}>
        <input type="text" className="border-2" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <div className="containe flex flex-col gap-2">
            {schools.filter((es) => es.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((e) => (
            <div key={e.idschool} className="flex justify-between p-2 border-black border-2">
                <div className="data flex gap-4">
                    <div>
                        <p>Nome:</p>
                        <span>{e.name}</span>
                    </div>
                    <div>
                        <p>Email:</p>
                        <span>{e.email}</span>
                    </div>
                    <div>
                        <p>Id:</p>
                        <span>{e.idschool}</span>
                    </div>
                </div>
                <div className="flex items-center text-2xl">
                    <MdEdit/>
                    <button onClick={() => {
                        setModalDelete(!modalDelete)
                    }}><IoIosRemoveCircle className="text-red-500"/></button>
                    {modalDelete && <DeleteSchool cancelledButton={() => setModalDelete(!modalDelete)} nameSchool={e.name} idSchool={e.idschool} idEmail={e.idEmail}/>}
                </div>
            </div>
            ))}
        </div>
    </section>
    </>
  )
}
