const ShowMainData = ({image,name,rating,summary,genres}) => {
  return (
    <>
   
    <div>
      <img src={image} alt="Not Found" className="w-7"/>
      <div>
        <h1>{name}</h1>
        <div>{rating.average||'N/A'}</div>
        <div dangerouslySetInnerHTML={{__html:summary}}/>
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
