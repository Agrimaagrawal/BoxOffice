import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import Starred from './components/pages/Starred';
import MainLayout from './components/MainLayout';
import ShowDetails from './components/pages/ShowDetails'

function App() {
 
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Starred' element ={<Starred/>}/>
      </Route>
      <Route path='/show/:id' element={<ShowDetails/>}/>
      </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App
