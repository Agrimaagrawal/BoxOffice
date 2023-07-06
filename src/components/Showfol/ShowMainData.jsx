const ShowMainData = ({image,name,rating,summary,genres}) => {
  return (
    <>
   
    <div className="flex justify-center items-center flex-col">
      <img src={image} alt="Not Found" />
      <div>
        <h1 className="text-3xl font-bold text-blue-500 p-4">{name}</h1>
        <div><span className="text-xl m-3 font-semibold">Ratings:</span>{rating.average||'N/A'}</div>
        <div dangerouslySetInnerHTML={{__html:summary}} className="m-4"/>
        <div>
            {
                genres.map((genre=>{
                    <span key={genre}>{genre}</span>
                }))
            }
          </div>

      </div>
    </div>
    
   
</>
  )
}

export default ShowMainData
