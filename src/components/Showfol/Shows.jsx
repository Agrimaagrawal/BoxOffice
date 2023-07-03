import ShowCard from "./ShowCard"


const Shows = ({shows}) => {
  return (
    <div>
      {shows.map((data=>{
        return (
          <ShowCard key={data.show.id} name={data.show.name} image={data.show.image ?.medium} summary={data.show.summary} id={data.show.id}/>
        )
      }))
    }
    </div>
  )
}

export default Shows
