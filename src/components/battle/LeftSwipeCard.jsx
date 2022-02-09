import { useState, useEffect, forwardRef } from 'react'
import { setCardsToDeck } from '../battleField/modules/setCardsToDeck'
import ActionButtons from './ActionButtons'
import DeckOfBattleCard from './DeckOfBattleCard'

const LeftSwipeCard = forwardRef((props, ref) => {
  const [isLoad, setIsLoad] = useState(false)

  let allCards = ref.current?.children

  useEffect(() => {
    setIsLoad(true)
    setCardsToDeck(Array.from(ref.current.children), false)
  }, [])

  return (
    <>
      <DeckOfBattleCard
        ref={ref}
        boxersList={props.boxersList.filter(
          (_, index) => index !== props.opponentIndex
        )}
        isLoad={isLoad}
      />
      <div className="w-full h-1/4 flex justify-center items-start">
        <ActionButtons
          swipeAnimation={props.swipeAnimation}
          allCards={allCards}
        />
      </div>
    </>
  )
})

export default LeftSwipeCard
