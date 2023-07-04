import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import{QueryClient,QueryClientProvider} from 'react-query';
import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import Starred from './components/pages/Starred';
import MainLayout from './components/MainLayout';
import ShowDetails from './components/pages/ShowDetails';
const queryClient = new QueryClient()

function App() {
 
  

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Starred' element ={<Starred/>}/>
      </Route>
      <Route path='/show/:id' element={<ShowDetails/>}/>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>

      
    </>
  )
}

export default App
