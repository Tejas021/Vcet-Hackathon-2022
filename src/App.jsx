
import './App.css'
import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.module.css'
import Home from './pages/Home/Home'
import Form from './pages/Form/Form'


function App() {

  const [success,setSuccess]=useState(false)

  return (

    <div className="App">
 
  <Router>
    <Routes>
    <Route path='/' element={<Home success={success}/>}/>
   
    <Route/>
    </Routes>

  </Router>

      
    </div>
  )
}

export default App
