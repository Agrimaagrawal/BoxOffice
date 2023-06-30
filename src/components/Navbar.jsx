import {Link} from 'react-router-dom'
const Navbar = () => {
  const link=[
    {text:"home",
    to:'/'
          },
          {
            text:'Dome',
            to:'/Dome'
          }
  ]
  return (
    <div>
      <ul className='flex gap-2'>
        {
          link.map(item=><li key={item.text} className="text-blue-500"><Link to={item.to}>{item.text}</Link></li>)
        }
      </ul>
    </div>
  )
}

export default Navbar
