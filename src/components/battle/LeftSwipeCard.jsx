import React, { useState, useEffect, useRef } from 'react'
import { setCardsToDeck } from '../battleField/modules/setCardsToDeck'
import ActionButtons from './ActionButtons'
import BattleCard from './BattleCard'

const LeftSwipeCard = (props) => {
  const [isLoad, setIsLoad] = useState(false)
  let ref = useRef(null)

  let allCards = ref.current?.children

  useEffect(() => {
    setIsLoad(true)
    setCardsToDeck(Array.from(ref.current.children), false)
  }, [])

  // battlefield

  return (
    <>
      <div className="w-full h-3/4 flexRowCenter">
        <div className={isLoad ? 'tinder loaded' : 'tinder'}>
          <div ref={ref} className="tinder--cards">
            {props.boxersList &&
              props.boxersList
                .filter((_, index) => index !== props.opponentIndex)
                .map((boxer, index) => (
                  <BattleCard key={index} boxer={boxer} />
                ))}
          </div>
        </div>
      </div>
      <div className="w-full h-1/4 flex justify-center items-start">
        <ActionButtons
          swipeAnimation={props.swipeAnimation}
          allCards={allCards}
        />
      </div>
    </>
  )
}

export default LeftSwipeCard
