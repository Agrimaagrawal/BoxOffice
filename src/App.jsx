import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Dome from './components/Dome';
import MainLayout from './components/MainLayout'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Dome' element ={<Dome/>}/>
      </Route>
      </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App
