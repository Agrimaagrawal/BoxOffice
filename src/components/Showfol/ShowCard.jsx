import {Link} from 'react-router-dom'
const ShowCard = ({name,image,id,summary}) => {
  const SummaryStripped=summary? summary.split(" ").slice(0,10).join(' ').replace(/<.+?>/g,'') : 'No description'
  return (
    <div >
      <div className="w-full h-full flex justify-center  flex-col items-center ">
      <img src={image} className='m-3'/>
      <h1>{name}</h1>
      <p>{SummaryStripped}</p>
      <div>
        <Link to='/'>Read more</Link>
        <button type="button" className=''>Star me</button>
      </div>
      
      </div>
    </div>
  )
}

export default ShowCard
