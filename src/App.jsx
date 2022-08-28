
import './App.css'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Form from './pages/Form/Form'

function App() {


  return (
    <div className="App">
  <Router>
  
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='register' element={<Form/>}/>
    <Route/>
    </Routes>

  </Router>
      
    </div>
  )
}

export default App
