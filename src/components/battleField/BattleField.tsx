import {
  useState,
  useRef,
  useEffect,
  VFC,
  Dispatch,
  SetStateAction,
} from 'react'
import { useHistory } from 'react-router-dom'
import CustomButton from '../atom/customButton/CustomButton'
import DeckOfBattleCard from './DeckOfBattleCard/DeckOfBattleCard'
import { setCardsToDeck } from './modules/setCardsToDeck'
import { swipeCardAnimation } from './modules/swipeCardAnimation'
import './battleField.scss'
import { getRemovedCards, getSwipingCards } from './modules/getSpecificCards'

interface Props {
  playersData: any[]
  setPlayersData: Dispatch<SetStateAction<any>>
  weightClass: string
}

const BattleField: VFC<Props> = ({ playersData, setPlayersData, weightClass }) => {
  const history = useHistory()
  // const [playersData, setPlayersData] = useState<any[]>(boxersList)
  const [opponentIndex, setOpponentIndex] = useState<number>(0)
  const [isDone, setIsDone] = useState<boolean>(false)
  const [isLoad, setIsLoad] = useState<boolean>(false)

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

    setPlayersData((prevData: any) =>
      prevData.map((data: any) => true && { ...data, score: 0 })
    )
  }, [])

  useEffect(() => {
    if (isDone) {
      swipeAnimation(Array.from(rightDeckRef.current.children), true)
      setIsDone(false)
      setOpponentIndex((prev) => prev + 1)
    }
  }, [isDone])

  return (
    <>
      <div className="h-1/4 flex flex-col justify-evenly items-center pt-10">
        <h1 className="text-5xl uppercase italic">Which is the stronger?</h1>
        <div className="text-lg">- {weightClass} -</div>
      </div>

      <div className="w-full h-3/4 lg:px-16 overflow-hidden flexRowCenter">
        <div className="w-2/5 h-full flexColCenter lg:pl-12">
          <DeckOfBattleCard
            ref={leftDeckRef}
            boxersList={playersData.filter(
              (_, index) => index !== opponentIndex
            )}
            isLoad={isLoad}
          />
          <div className="w-full h-1/4 flex justify-center items-start">
            <CustomButton
              className="loseBtn"
              onClick={() => {
                swipeAnimation(Array.from(leftDeckRef.current?.children), false)
                setPlayersData((prevData: any) =>
                  prevData.map((data: any, index: number) =>
                    opponentIndex === index
                      ? { ...data, score: data.score + 1 }
                      : data
                  )
                )
              }}
            >
              {'Lose'}
            </CustomButton>
            <CustomButton
              className="winBtn"
              onClick={() => {
                swipeAnimation(Array.from(leftDeckRef.current?.children), true)
                setPlayersData((prevData: any) =>
                  prevData.map((data: any, index: number) =>
                    opponentIndex === index
                      ? { ...data, score: data.score - 1 }
                      : data
                  )
                )
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
          <DeckOfBattleCard
            ref={rightDeckRef}
            boxersList={playersData}
            isLoad
          />
          <div className="w-full h-1/4 flex justify-center items-start">
            <h1 className="text-xl">対戦相手</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default BattleField
