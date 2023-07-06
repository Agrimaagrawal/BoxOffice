import { useParams,Link} from "react-router-dom";
import { getShowId } from "../../api/tvmaze";
import { useQuery } from "react-query";
import ShowMainData from "../Showfol/ShowMainData";
import Details from "../Showfol/Details";
import Seasons from "../Showfol/Seasons";
import Cast from "../Showfol/Cast";


const ShowDetails = () => {
  const {id}=useParams();
  const {data:showData,error:showError}=useQuery({queryKey:['show',id], queryFn:()=>getShowId(id)});
  
    


  if(showError){
    return <div>Sorry ! an Error occur {showData.message}</div>
  }
  if(showData){
    
    return (
      <>
       <Link to='/' className="text-xl bg-yellow-400 p-2 rounded-md">Go Back</Link>
      <div className="mt-4">
        <ShowMainData image={showData.image.original} name={showData.name} rating={showData.rating} summary={showData.summary} genres={showData.genres}/>
      </div>
      <div className="flex justify-center flex-wrap m-4 ">
        <h2 className="text-2xl font-bold pr-4 ">Details</h2>
        <Details status={showData.status} premiered={showData.premiered} network={showData.network}/>

      </div>
      <div className="flex justify-center  ">
        <h2 className="text-2xl font-bold pr-4 ">Seasons</h2>
        {<Seasons seasons={showData._embedded.seasons}/>}
      </div>
      <div>
        <h2 className="text-4xl font-bold pr-4 mt-16">Cast</h2>
        {<Cast cast={showData._embedded.cast}/>}
      </div>
      </>

    )
  }
  
    
  return (
    <div>
    
    </div>
  )
}

export default ShowDetails
