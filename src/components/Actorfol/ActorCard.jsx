import {Link} from 'react-router-dom';
const ActorCard = ({name,image}) => {
  return (
    <div>
        <div className="w-full h-full flex justify-center  flex-col items-center ">
      <img src={image} className='m-3'/>
      <h1>{name}</h1>
      
      <div>
        <Link to='/'>Read more</Link>
        <button type="button" className=''>Star me</button>
      </div>
      
      </div>
      
    </div>
  )
}

export default ActorCard
