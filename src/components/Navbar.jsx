import {Link} from 'react-router-dom'
const Navbar = () => {
  const link=[
    {text:"Home",
    to:'/'
          },
          {
            text:'Starred',
            to:'/Starred'
          }
  ]
  return (
    <div>
      <ul className='flex gap-6 justify-center m-10 '>
        {
          link.map(item=><li key={item.text} className="text-blue-500 text-xl hover:text-blue-800 "><Link to={item.to}>{item.text}</Link></li>)
        }
      </ul>
    </div>
  )
}

export default Navbar
