const BASE_URL='https://api.tvmaze.com'
const apiGet=async(query)=>{
   

const response=await fetch(` ${BASE_URL}${query}`)
    const body=await response.json();
    
  return body;

};
export const searchForShows=(query)=> apiGet(`/search/shows?q=${query}`);
export const searchForActors=(query)=>apiGet(`/search/people?q=${query}`);
export const getShowId=(showId)=>apiGet(`/shows/${showId}`);