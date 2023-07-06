import { useStarredShows } from "../../lib/useStarred"

const Starred = () => {
  const [starredShows]=useStarredShows();
  return (
    <div>
      {starredShows.length}
    </div>
  )
}

export default Starred



