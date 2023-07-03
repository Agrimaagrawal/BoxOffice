
import ActorCard from './ActorCard'

const Actors = ({actor}) => {
  return (
    <div>
      {actor.map(data=>(
           <ActorCard key={data.person.id} name={data.person.name} image={data.person.image?.medium} />
      ))}
    </div>
  )
}

export default Actors
