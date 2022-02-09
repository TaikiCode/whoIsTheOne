import { forwardRef } from 'react'
import BattleCard from './BattleCard'

const DeckOfBattleCard = forwardRef(({ boxersList, isLoad }, ref) => {
  return (
    <div className="w-full h-3/4 flexRowCenter">
      <div className={isLoad ? 'tinder loaded' : 'tinder'}>
        <div ref={ref} className="tinder--cards">
          {boxersList &&
            boxersList.map((boxer, index) => (
              <BattleCard key={index} boxer={boxer} />
            ))}
        </div>
      </div>
    </div>
  )
})

export default DeckOfBattleCard
