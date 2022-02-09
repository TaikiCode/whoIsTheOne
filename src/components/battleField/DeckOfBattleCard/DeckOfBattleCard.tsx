import { forwardRef } from 'react'
import BattleCard from '../../battle/BattleCard'

interface Props {
    boxersList: any[]
    isLoad: boolean
}

const DeckOfBattleCard = forwardRef<HTMLDivElement, Props>(({ boxersList, isLoad }, ref) => {
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
