
import { useEffect,useReducer } from "react";
const usePresisted=(reducer,initialState,localStorageKey)=>{
    const [state,dispatch]=useReducer(reducer,initialState,(initial)=>{
        const persistedValue=localStorage.getItem(localStorageKey)
        return persistedValue?JSON.parse(persistedValue):initial
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
  export const useStarredShows=()=>{
    return usePresisted(starredShows,[],'star')
  }
