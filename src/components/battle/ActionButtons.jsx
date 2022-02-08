import React from 'react'

const ActionButtons = ({ swipeAnimation, allCards }) => {
  const BUTTON_CONFIG = [
    {
      text: 'Lose',
      className: 'loseBtn',
      onClick: () => swipeAnimation(Array.from(allCards), false),
    },
    {
      text: 'Win',
      className: 'winBtn',
      onClick: () => swipeAnimation(Array.from(allCards), true),
    },
  ]

  return (
    <div className="tinder--buttons">
      {BUTTON_CONFIG.map((item, index) => (
        <button key={index} className={item.className} onClick={item.onClick}>
          {item.text}
        </button>
      ))}
    </div>
  )
}

export default ActionButtons
