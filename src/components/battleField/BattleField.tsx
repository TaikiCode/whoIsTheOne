import { useState, useRef, useEffect, VFC } from 'react'
import { useHistory } from 'react-router-dom'
import CustomButton from '../atom/customButton/CustomButton'
import DeckOfBattleCard from './DeckOfBattleCard/DeckOfBattleCard'
import { setCardsToDeck } from './modules/setCardsToDeck'
import { swipeCardAnimation } from './modules/swipeCardAnimation'
import './battleField.scss'
import { getRemovedCards, getSwipingCards } from './modules/getSpecificCards'

interface Props {
  boxersList: any[]
}

const BattleField: VFC<Props> = ({ boxersList }) => {
  const history = useHistory()
  const [playersData, setPlayersData] = useState<any[]>(boxersList)
  const [opponentIndex, setOpponentIndex] = useState(0)
  const [isDone, setIsDone] = useState(false)
  const [isLoad, setIsLoad] = useState(false)

  let leftDeckRef = useRef<any>(null)
  let rightDeckRef = useRef<any>(null)

  if (rightDeckRef.current?.children) {
    const opponentCards = rightDeckRef.current.children
    const isOver =
      getRemovedCards(Array.from(opponentCards)).length === opponentCards.length
    if (isOver) {
      history.push(`/battle`)
    }
  }

  const swipeAnimation = (cards: HTMLDivElement[], isWinner: boolean) => {
    const newCards = getSwipingCards(cards)
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

    setPlayersData((prevData) => prevData.map((data) => true && {...data, score: 0 }))
  }, [])

  useEffect(() => {
    console.log(playersData)
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
          <CustomButton
            className="loseBtn"
            onClick={() =>  {
              swipeAnimation(Array.from(leftDeckRef.current?.children), false)
              setPlayersData((prevData) => prevData.map((data, index) => opponentIndex === index ? {...data, score: data.score + 1}: data))
              
            }}
          >
            {'Lose'}
          </CustomButton>
          <CustomButton
            className="winBtn"
            onClick={() => {
              swipeAnimation(Array.from(leftDeckRef.current?.children), true)
              setPlayersData((prevData) => prevData.map((data, index) => opponentIndex === index ? {...data, score: data.score - 1}: data))
            }}
          >
            {'Win'}
          </CustomButton>
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
