import {Link} from 'react-router-dom';
const ActorCard = ({name,image}) => {
  return (
    <div>
      {image ?<div className="w-full h-full flex justify-center  flex-col items-center ">
        <img src={image} className='m-3'/>
      <h1 className='text-xl font-bold p-4'>{name}</h1>
      
      
      
      </div> :""}
        
      
    </div>
  )
}

export default ActorCard
