import {useState} from 'react';
import { searchForShows } from '../../api/tvmaze';
import { searchForActors } from '../../api/tvmaze';
import Search from '../Search'
import Shows from '../Showfol/Shows';
import Actors from '../Actorfol/Actors';
import { useQuery } from 'react-query';

const Home = () => {
  const [filter, setFilter] = useState(null);
 

  const { data:apiData,error:errorv } = useQuery({
      queryKey: ['search', filter],
      queryFn: () => filter. searchOption==='shows'?searchForShows(filter.q):searchForActors(filter.q),
      // ⬇️ disabled as long as the filter is empty
      enabled: !!filter,
      refetchOnWindowFocus:false,
  })

  

  
  const onSearch=async({q,  searchOption})=>{
    setFilter({  q,searchOption})

    
    
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
