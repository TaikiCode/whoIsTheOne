import React, { useState, useEffect, useRef } from 'react'
import BattleCard from './BattleCard'

const RightSwipeCard = (props) => {
  let ref = useRef(null)

  //   const router = useRouter()

  let allCards = ref.current?.children

  if (allCards) {
    const isOver =
      Array.from(allCards).filter((item) => item.className !== 'tinder--card')
        .length === allCards.length
    if (isOver) {
      alert('hello')
      //   router.push(
      //     '/battle/result/[slug]',
      //     `/battle/result/${props.weightClass}`
      //   )
      //   localStorage.setItem('playerData', JSON.stringify(props.playersData))
    }
  }

  useEffect(() => {
    props.setCards(Array.from(ref.current.children), false)
    props.setPlayersData([props.boxersList[props.opponentIndex]])
    // props.handleSetDispatch({
    //   data: props.boxersList[props.opponentIndex],
    //   index: props.opponentIndex,
    // })
  }, [])

  useEffect(() => {
    if (props.isDone) {
      props.swipeAnimation(Array.from(allCards), true)
      props.setIsDone(false)
      props.setOpponentIndex((prev) => prev + 1)
      props.setPlayersData((prev) => [
        ...prev,
        props.boxersList[props.opponentIndex + 1],
      ])
    }
  }, [props.isDone])

  return (
    <>
      <div className="w-full h-3/4 flexRowCenter">
        <div className="tinder loaded">
          <div ref={ref} className="tinder--cards">
            {props.boxersList &&
              props.boxersList.map((item, index) => (
                <BattleCard key={index} boxer={item} />
              ))}
          </div>
        </div>
      </div>
      <div className="w-full h-1/4 flex justify-center items-start">
        <h1 className="text-xl">対戦相手</h1>
      </div>
    </>
  )
}

export default RightSwipeCard
