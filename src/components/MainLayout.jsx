
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const MainLayout = () => {
  return (
    <div>
      <h1 className=' text-5xl md:text-7xl font-bold  m-4'>Box Office</h1>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default MainLayout
