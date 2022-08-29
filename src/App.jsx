
import './App.css'
import Gallery from './components/Gallery/Gallery'
import Landing from './components/Landing/Landing'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <div className="App">
      <Navbar />
      <Landing/>
      <Gallery/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
