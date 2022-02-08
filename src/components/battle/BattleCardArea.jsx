import React from 'react'
import LeftSwipeCard from './LeftSwipeCard'
import RightSwipeCard from './RightSwipeCard'

const BattleCardArea = (props) => {
  return (
    <div className="w-full h-3/4 lg:px-16 overflow-hidden flexRowCenter">
      <div className="w-2/5 h-full flexColCenter lg:pl-12">
        <LeftSwipeCard {...props} />
      </div>
      <div className="w-1/5 h-full flexRowCenter">
        <h1 className="text-4xl font-serif pb-24">VS</h1>
      </div>
      <div className="w-2/5 h-full flexColCenter lg:pr-12">
        <RightSwipeCard {...props} />
      </div>
    </div>
  )
}

export default BattleCardArea
