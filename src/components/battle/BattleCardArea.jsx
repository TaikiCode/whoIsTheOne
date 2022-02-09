import { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { setCardsToDeck } from '../battleField/modules/setCardsToDeck'
import { swipeCardAnimation } from '../battleField/modules/swipeCardAnimation'
import ActionButtons from './ActionButtons'
import DeckOfBattleCard from './DeckOfBattleCard'

const BattleCardArea = ({ boxersList }) => {
  const history = useHistory()
  // const [playersData, setPlayersData] = useState([])
  const [opponentIndex, setOpponentIndex] = useState(0)
  const [isDone, setIsDone] = useState(false)
  const [isLoad, setIsLoad] = useState(false)

  let leftDeckRef = useRef(null)
  let rightDeckRef = useRef(null)

  if (rightDeckRef.current?.children) {
    const isOver =
      Array.from(rightDeckRef.current.children).filter(
        (item) => item.className !== 'tinder--card'
      ).length === rightDeckRef.current.children.length
    if (isOver) {
      history.push(`/battle`)
    }
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

  useEffect(() => {
    // カードの初期セット処理
    setIsLoad(true)
    setCardsToDeck(Array.from(leftDeckRef.current.children), false)
    setCardsToDeck(Array.from(rightDeckRef.current.children), false)
  }, [])

  useEffect(() => {
    if (isDone) {
      swipeAnimation(Array.from(rightDeckRef.current.children), true)
      setIsDone(false)
      setOpponentIndex((prev) => prev + 1)
    }
  }, [isDone])

  return (
    <div className="w-full h-3/4 lg:px-16 overflow-hidden flexRowCenter">
      <div className="w-2/5 h-full flexColCenter lg:pl-12">
        <DeckOfBattleCard
          ref={leftDeckRef}
          boxersList={boxersList.filter((_, index) => index !== opponentIndex)}
          isLoad={isLoad}
        />
        <div className="w-full h-1/4 flex justify-center items-start">
          <ActionButtons
            swipeAnimation={swipeAnimation}
            allCards={leftDeckRef.current?.children}
          />
        </div>
      </div>
      <div className="w-1/5 h-full flexRowCenter">
        <h1 className="text-4xl font-serif pb-24">VS</h1>
      </div>
      <div className="w-2/5 h-full flexColCenter lg:pr-12">
        <DeckOfBattleCard ref={rightDeckRef} boxersList={boxersList} isLoad />
        <div className="w-full h-1/4 flex justify-center items-start">
          <h1 className="text-xl">対戦相手</h1>
        </div>
      </div>
    </div>
  )
}

export default BattleCardArea
