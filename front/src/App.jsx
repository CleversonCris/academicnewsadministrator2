import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddUser from "./pages/AddUser"
import Home from "./pages/Home"
function App() {


  return (
    <>
      <Router>
          <Routes>
              <Route path="/adduser" element={<AddUser/>}/>
              <Route path="/" element={<Home/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
