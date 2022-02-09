import { useState, useRef } from 'react'
import { setCardsToDeck } from '../battleField/modules/setCardsToDeck'
import { swipeCardAnimation } from '../battleField/modules/swipeCardAnimation'
import LeftSwipeCard from './LeftSwipeCard'
import RightSwipeCard from './RightSwipeCard'

const BattleCardArea = ({ boxersList }) => {
  // const [playersData, setPlayersData] = useState([])
  const [opponentIndex, setOpponentIndex] = useState(0)
  const [isDone, setIsDone] = useState(false)
  let refs = {
    leftSideRef: useRef(null),
    rightSideRef: useRef(null),
  }

  const swipeAnimation = (cards, isWinner) => {
    const newCards = cards.filter((item) => item.className === 'tinder--card')
    if (!newCards.length) return false

    swipeCardAnimation(newCards[0], isWinner)

    setCardsToDeck(cards, false)
    if (newCards.length === 1) {
      setTimeout(() => {
        setCardsToDeck(cards, true)
        setIsDone(true)
      }, 500)
    }
  }

  return (
    <div className="w-full h-3/4 lg:px-16 overflow-hidden flexRowCenter">
      <div className="w-2/5 h-full flexColCenter lg:pl-12">
        <LeftSwipeCard
          boxersList={boxersList.filter((_, index) => index !== opponentIndex)}
          ref={refs.leftSideRef}
          swipeAnimation={swipeAnimation}
        />
      </div>
      <div className="w-1/5 h-full flexRowCenter">
        <h1 className="text-4xl font-serif pb-24">VS</h1>
      </div>
      <div className="w-2/5 h-full flexColCenter lg:pr-12">
        <RightSwipeCard
          boxersList={boxersList}
          setOpponentIndex={setOpponentIndex}
          isDone={isDone}
          setIsDone={setIsDone}
          ref={refs.rightSideRef}
          swipeAnimation={swipeAnimation}
        />
      </div>
    </div>
  )
}

export default BattleCardArea
