
const ShowCard = ({name,image,id,summary,onStarclick,isStarred}) => {
  const SummaryStripped=summary? summary.split(" ").slice(0,10).join(' ').replace(/<.+?>/g,'') : 'No description'
  return (
    <div >
      <div className="w-[300px] h-auto flex  justify-center  flex-col items-center mb-9 ">
      <img src={image} className='m-3 shadow-xl'/>
      <h1 className='font-extrabold text-2xl p-3'>{name}</h1>
      <p>{SummaryStripped}</p>
      <div>
        <a href={`/show/${id}` } className='p-4 text-blue-700 text-lg font-bold  underline'  >Read more</a>
        <button type="button" className='' onClick={()=>onStarclick(id)}>{isStarred ? <img src="star.png" className="w-10 "></img>:<img src="unstar.png " className="w-10"></img>}</button>
      </div>
      
      </div>
    </div>
  )
}

export default ShowCard
