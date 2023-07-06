const Seasons = ({seasons}) => {
  return (
    <div>
      <div className="flex">
      <p className="pl-4 pr-4 pt-1 text-lg"><span className="text-lg font-semibold ">Seasons in total:</span>{seasons.length}</p>
      <p className="pl-4 pr-4 pt-1 text-lg"><span className="text-lg font-semibold ">Episodes in total:</span>{seasons.reduce((sum,season)=>sum+season.episodeOrder,0)}</p>
      </div>
       <div>
        {seasons.map(season=>{
            <div key={season.id}>
                <p>Season{season.number}</p>
                <p>Episodes:{season.episodeOrder}</p>
                <div>
                    Aired:{season.premiereData}-{season.endDate}
                </div>

            </div>
        })}
       </div>
    </div>
  )
}

export default Seasons
