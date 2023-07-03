import {useState} from 'react';
import { searchForShows } from '../../api/tvmaze';
import { searchForActors } from '../../api/tvmaze';
import Search from '../Search'
import Shows from '../Showfol/Shows';
import Actors from '../Actorfol/Actors';

const Home = () => {

  const [apiData,setApiData]=useState(null);
  const [errorv,setErrorv]=useState(null);

  
  const onSearch=async(op)=>{
    try{
      setErrorv(null);
      if(op.o==='shows'){
        const result=await searchForShows(op.q);
        setApiData(result);
      }
      else{
        const result=await searchForActors(op.o);
        setApiData(result);
      }
   
    }catch(error){
      setErrorv(error);
    }
    
  }
  const renderApiData=()=>{
    if(errorv){
      return <div>Error:{setErrorv.message}</div>
    }
    if(apiData?.length === 0){
          return <div>No results</div>
    }
    if(apiData){
      return apiData[0].show ? <Shows shows={apiData}/>:<Actors actor={apiData}/>   
    }
    return null;

  }
  
  return (
    <div>
      <Search onSearch={onSearch}/>
      <div>
        {
         renderApiData()
        }

      </div>
      
    </div>
  )
}

export default Home
