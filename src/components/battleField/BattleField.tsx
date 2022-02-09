import { useState, useRef, useEffect, VFC } from 'react'
import { useHistory } from 'react-router-dom'
import ActionButtons from '../battle/ActionButtons'
import DeckOfBattleCard from './DeckOfBattleCard/DeckOfBattleCard'
import { setCardsToDeck } from './modules/setCardsToDeck'
import { swipeCardAnimation } from './modules/swipeCardAnimation'

interface Props {
  boxersList: any[]
}

const BattleField: VFC<Props> = ({ boxersList }) => {
  const history = useHistory()
  // const [playersData, setPlayersData] = useState([])
  const [opponentIndex, setOpponentIndex] = useState(0)
  const [isDone, setIsDone] = useState(false)
  const [isLoad, setIsLoad] = useState(false)

  let leftDeckRef = useRef<any>(null)
  let rightDeckRef = useRef<any>(null)

  if (rightDeckRef.current?.children) {
    const isOver =
      Array.from(rightDeckRef.current.children).filter(
        (item: any) => item.className !== 'tinder--card'
      ).length === rightDeckRef.current.children.length
    if (isOver) {
      history.push(`/battle`)
    }
  }

  const swipeAnimation = (cards: HTMLDivElement[], isWinner: boolean) => {
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

export default BattleField
