import { useStarredShows } from "../../lib/useStarred"
import { useQuery } from "react-query";
import { getShowsId } from "../../api/tvmaze";

import Shows from "../Showfol/Shows"

const Starred = () => {
  const [starredShowsbyId]=useStarredShows();
  const { data:starredShows,error:errorv } = useQuery({
    queryKey: ['starred', starredShowsbyId],
    queryFn: async() => 
      getShowsId(starredShowsbyId).then(result=>
        result.map(show=>({show}))
        ),
    refetchOnWindowFocus:false,
});
if(starredShows?.length===0){
  return <div>No shows starred</div>
}
if(starredShows?.length>0){
  return <Shows shows={starredShows}/>
}
  return (
    <div>
      hello
    </div>
  )
}

export default Starred



