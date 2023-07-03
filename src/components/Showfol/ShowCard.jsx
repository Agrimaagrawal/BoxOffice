import {Link} from 'react-router-dom'
const ShowCard = ({name,image,id,summary}) => {
  const SummaryStripped=summary? summary.split(" ").slice(0,10).join(' ').replace(/<.+?>/g,'') : 'No description'
  return (
    <div >
      <div className="w-full h-full flex justify-center  flex-col items-center ">
      <img src={image} className='m-3'/>
      <h1 className='font-extrabold text-xl '>{name}</h1>
      <p>{SummaryStripped}</p>
      <div>
        <Link to={`/show/:${id}` }className='m-4 text-blue-700 text-lg font-bold '>Read more</Link>
        <button type="button" className=''>Star me</button>
      </div>
      
      </div>
    </div>
  )
}

export default ShowCard
