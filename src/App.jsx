
import './App.css'

import Gallery from './components/Gallery/Gallery'
import Landing from './components/Landing/Landing'
import Navbar from './components/Navbar/Navbar'



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
