import { forwardRef } from 'react'
import BattleCard from '../BattleCard/BattleCard'

interface Props {
  boxersList: any[]
  isLoad: boolean
}

const DeckOfBattleCard = forwardRef<HTMLDivElement, Props>(
  ({ boxersList, isLoad }, ref) => {
    return (
      <div className="w-full h-3/4 flexRowCenter">
        <div className={`deckOfCard ${isLoad ? "opacity-100" : "opacity-0"}`}>
          <div ref={ref} className="flex flex-grow justify-center items-center text-center z-10 relative">
            {boxersList &&
              boxersList.map((boxer, index) => (
                <BattleCard key={index} boxer={boxer} />
              ))}
          </div>
        </div>
      </div>
    )
  }
)

export default DeckOfBattleCard
