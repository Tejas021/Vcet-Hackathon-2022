
import './App.css'

import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './pages/Home/Home'
import Rules from './components/Rules/Rules'
import Form from './pages/Form/Form'
import Info from './components/Info/Info'
import Association from './components/Association/Association'


function App() {


  return (
    <div className="App">

  <Router>
  
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Rules' element={<Rules/>}/>
    <Route path='register' element={<Form/>}/>
    <Route path="/Info" element={<Info />} />
    <Route path="/Association" element={<Association />} />
    <Route/>
    </Routes>

  </Router>

      
    </div>
  )
}

export default App
