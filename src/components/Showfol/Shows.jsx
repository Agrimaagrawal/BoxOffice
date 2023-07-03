import ShowCard from "./ShowCard"


const Shows = ({shows}) => {
  return (
    <div>
      {shows.map((data=>{
        return (
          <ShowCard key={data.show.id} name={data.show.name} image={data.show.image ?.medium} summary={data.show.summary}/>
        )
      }))
    }
    </div>
  )
}

export default Shows
