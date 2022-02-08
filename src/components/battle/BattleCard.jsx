import React from 'react'

const BattleCard = ({ boxer }) => {
  return (
    <div className="tinder--card">
      <img src={boxer.image} alt={boxer.name} />
      <h3 className="text-lg font-serif px-4 pt-3 pb-1">{boxer.name}</h3>
      <p className="text-sm font-serif">
        {boxer.record}
        {/* {boxer.win}-{boxer.lose}-{boxer.draw} {boxer.KO}KOs */}
      </p>
    </div>
  )
}

export default BattleCard
