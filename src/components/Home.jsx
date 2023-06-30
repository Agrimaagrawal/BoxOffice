import {useState} from 'react';
import { searchForShows } from '../api/tvmaze';

const Home = () => {
  const [searchvalue,setSearchvalue]=useState("");
  const [apiData,setApiData]=useState(null);
  const [errorv,setErrorv]=useState(null);
  
  const handleText=(e)=>{
    setSearchvalue(e.target.value);
   
    

  }
  const onSearch=async(e)=>{
    e.preventDefault();
    try{
    const result=await searchForShows(searchvalue);
    setApiData(result);
    }catch(error){
      setErrorv(error);
    }
    
  }
  const renderApiData=()=>{
    if(errorv){
      return <div>Error:{setErrorv.message}</div>
    }
    if(apiData){
      return(
        apiData.map((elem)=>{
          return(
          <h1 key={elem.show.id}>{elem.show?.name}</h1>
          )
          

        })
      )
    }
    return null;

  }
  
  return (
    <div>
      <form onSubmit={onSearch}>
      <input type="text" value={searchvalue} onChange={handleText} placeholder="Search" />
      <button >Search</button>
      </form>
      <div>
        {
         renderApiData()
        }

      </div>
    </div>
  )
}

export default Home
