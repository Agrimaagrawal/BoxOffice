import {useState} from 'react';
import { searchForShows } from '../api/tvmaze';
import { searchForActors } from '../api/tvmaze';

const Home = () => {
  const [searchvalue,setSearchvalue]=useState("");
  const [apiData,setApiData]=useState(null);
  const [errorv,setErrorv]=useState(null);
  const [searchOption,setSearchOption]=useState('shows');
  console.log(searchOption)

  
  const handleText=(e)=>{
    setSearchvalue(e.target.value);
  
  }
  const onRadioChange=e=>{
    setSearchOption(e.target.value);
  }
  const onSearch=async(e)=>{
    e.preventDefault();
    try{
      setErrorv(null);
      if(searchOption==='shows'){
        const result=await searchForShows(searchvalue);
        setApiData(result);
      }
      else{
        const result=await searchForActors(searchvalue);
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
      <form onSubmit={onSearch}>
        <div className='flex flex-col justify-center items-center gap-5'>
      <input type="text" value={searchvalue} onChange={handleText} placeholder="Search" className='m-4'/>
      <div><label>
        Shows
        <input type="radio" name="search-option" value="shows" checked={searchOption==='shows'} onChange={onRadioChange}/>
      </label>
      <label>
        Actors
        <input type="radio" name="search-option" value="actors" checked={searchOption==='actors'} onChange={onRadioChange}/>
      </label>
      </div>
      <button className="bg-blue-700 w-24  p-3">Search</button>
      </div>
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
