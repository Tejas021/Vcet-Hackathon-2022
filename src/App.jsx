
import './App.css'
import { useState,useEffect } from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.module.css'
import Home from './pages/Home/Home'
import Form from './pages/Form/Form'
import { addDoc, collection, db, getDocs } from './firebase'

function App() {

  const [success,setSuccess]=useState(false)
  const [l,setL]=useState([])

  useEffect(() => {
    const lists = async () => {
      const listRef = collection(db, "registrations");
      const querySnapshot = await getDocs(listRef);
      let arr = []
      querySnapshot.docs.map(doc => {
        arr = arr.concat(doc.data().data)
      })
      setL(arr)
    }
    lists()

  }, [])

console.log(l)

  return (

    <div className="App">
 
  <Router>
    <Routes>
    <Route path='/' element={<Home success={success}/>}/>
    <Route path='register' element={<Form setSuccess={setSuccess} />}/>
    <Route/>
    </Routes>

  </Router>

      
    </div>
  )
}

export default App
