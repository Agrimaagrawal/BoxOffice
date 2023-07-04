import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getShowId } from "../../api/tvmaze";

const useShowById=(id)=>{
  const [showData,setShowData]=useState(null);
  const [showError ,setShowError]=useState(null);
    
    useEffect(()=>{
        
        async function fetchData(){
          try{
            const response=await getShowId(id);
            setShowData(response);
          }catch(err){
            setShowError(err);
          }
           
           
        }
        fetchData();

    },[id])
    return(showData,showError);
    
   
}
const ShowDetails = () => {
  const {id}=useParams();
  const {showData,showError}=useShowById(id);

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
