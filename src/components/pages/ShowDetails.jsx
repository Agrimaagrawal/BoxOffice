import { useParams } from "react-router-dom";
import { getShowId } from "../../api/tvmaze";
import { useQuery } from "react-query";


const ShowDetails = () => {
  const {id}=useParams();
  const {data:showData,error:showError}=useQuery({queryKey:['show',id], queryFn:()=>getShowId(id)});


  if(showError){
    return <div>Sorry ! an Error occur {showData.message}</div>
  }
  if(showData){
    return <div>Got show data:{showData.name}</div>
  }
  
    
  return (
    <div>
    
    </div>
  )
}

export default ShowDetails
