import ShowCard from "./ShowCard";
import{useReducer,useEffect}from 'react';
const usePresisted=(reducer,initialState,localStorageKey)=>{
  const [state,dispatch]=useReducer(reducer,initialState,(initial)=>{
      const persistedValue=localStorage.getItem(localStorageKey)
      return persistedValue?JSON.parse():initial
  });
  useEffect(()=>{
      localStorage.setItem(localStorageKey,JSON.stringify(state))
  },[state,localStorageKey])
  return [state,dispatch];
}

const starredShows=(currentStarred,action)=>{
  
  switch(action.type){
    case'star':
    return currentStarred.concat(action.id);
    case'unstar':
    return currentStarred.filter(id=>id!==action.id)
  }

}

const Shows = ({shows}) => {
 
  const [starred,dispatch]=usePresisted(starredShows,[],'starred show');
  
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
          <ShowCard key={data.show.id} name={data.show.name} image={data.show.image ?.medium} summary={data.show.summary} id={data.show.id}onStarclick={onStarclick}/>
        )
      }))
    }
    </div>
  )
}

export default Shows
