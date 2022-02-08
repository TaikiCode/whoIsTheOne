import { setCardsToDeck } from '../components/battleField/modules/setCardsToDeck'


const swipeCardAnimation = (card, isWinner) => {
  const moveOutWidth = document.body.clientWidth * 1.5
  card.classList.add('removed')
  card.style.transform = isWinner ? `translate(${moveOutWidth}px, -100px) rotate(-30deg)` : `translate(-${moveOutWidth}px, -100px) rotate(30deg)` 
}


const Functions = (state) => {
  const swipeAnimation = (cards, isWinner) => {
    const newCards = cards.filter((item) => item.className === 'tinder--card')
    if (!newCards.length) return false

    console.log(newCards[0])

    swipeCardAnimation(newCards[0], isWinner)

    setCardsToDeck(cards, false)
    if (newCards.length === 1) {
      setTimeout(() => {
        setCardsToDeck(cards, true)
        state.setIsDone(true)
      }, 500)
    }
  }
  return { swipeAnimation }
}

export default Functions
