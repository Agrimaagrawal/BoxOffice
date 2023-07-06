import ShowCard from "./ShowCard";
import{useReducer,useEffect}from 'react';
import {useStarredShows} from '../../lib/useStarred'

const Shows = ({shows}) => {
 
  const [starred,dispatch]=useStarredShows();
  
  console.log({starred})
  const onStarclick=(id)=>{
    const isStarred=starred.includes(id);
    console.log(isStarred)
    console.log(id);
    if(isStarred){
      dispatch({type:'unstar',id});
    }
    else{
      dispatch({type:'star',id})
    }

  }
  return (
    <div>
      {shows.map((data=>{
        return (
          <ShowCard key={data.show.id} name={data.show.name} image={data.show.image ?.medium} summary={data.show.summary} id={data.show.id}onStarclick={onStarclick} isStarred={starred.includes(data.show.id)}/>
        )
      }))
    }
    </div>
  )
}

export default Shows;
