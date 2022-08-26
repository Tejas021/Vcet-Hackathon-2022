
import './App.css'
import Gallery from './components/Gallery/Gallery'
import Landing from './components/Landing/Landing'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <div className="App">
      <Navbar />
      <Landing/>
      <Gallery/>
    </div>
  )
}

export default App
