import {useState} from 'react';
import { searchForShows } from '../api/tvmaze';
import { searchForActors } from '../api/tvmaze';
import {Search} from '../components/Search'

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
    if(apiData){
      return apiData[0].show ? apiData.map((data=>{
        return(
          <div key={data.show.id}>{data.show.name}</div>
        )
      })): apiData.map((data=>{
        return(
          <div key={data.person.id}>{data.person.name}</div>
        )
      }))
        
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
