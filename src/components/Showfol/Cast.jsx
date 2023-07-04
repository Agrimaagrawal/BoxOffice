

const Cast = ({cast}) => {
  return (
    <div>
      {
        cast.map((cast=>{
            return(
            <div key={cast.person.id}><img src={cast.person.image?.medium} alt="" /> {cast.person.name}</div>
            )
        }))
      }
    </div>
  )
}

export default Cast
