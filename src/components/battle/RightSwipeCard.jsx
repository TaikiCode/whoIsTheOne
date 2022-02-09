import { useEffect, forwardRef } from 'react'
import { useHistory } from 'react-router-dom'
import { setCardsToDeck } from '../battleField/modules/setCardsToDeck'
import DeckOfBattleCard from './DeckOfBattleCard'

const RightSwipeCard = forwardRef((props, ref) => {
  let allCards = ref.current?.children
  const history = useHistory()
  if (allCards) {
    const isOver =
      Array.from(allCards).filter((item) => item.className !== 'tinder--card')
        .length === allCards.length
    if (isOver) {
      history.push(`/battle`)
    }
  }

  useEffect(() => {
    setCardsToDeck(Array.from(ref.current.children), false)
  }, [])

  useEffect(() => {
    if (props.isDone) {
      props.swipeAnimation(Array.from(allCards), true)
      props.setIsDone(false)
      props.setOpponentIndex((prev) => prev + 1)
    }
  }, [props.isDone])

  return (
    <>
      <DeckOfBattleCard ref={ref} boxersList={props.boxersList} isLoad />
      <div className="w-full h-1/4 flex justify-center items-start">
        <h1 className="text-xl">対戦相手</h1>
      </div>
    </>
  )
})

export default RightSwipeCard
