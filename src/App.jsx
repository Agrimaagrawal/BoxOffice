import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Dome from './components/Dome'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Dome' element ={<Dome/>}/>
      </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App
