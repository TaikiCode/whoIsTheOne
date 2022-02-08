import { setCardsToDeck } from './setCardsToDeck'


// カードスワイプのアニメーション
const swipeCardAnimation = (frontCard: HTMLDivElement, isWinner: boolean) => {
    const moveOutWidth = document.body.clientWidth * 1.5;
    frontCard.classList.add("removed");
    frontCard.style.transform = isWinner ? `translate(${moveOutWidth}px, -100px) rotate(-30deg)` : `translate(-${moveOutWidth}px, -100px) rotate(30deg)` 
}


export const swipeCards = (cards: HTMLDivElement[], isWinner: boolean) => {
  const newCards = cards.filter((card) => card.className === 'tinder--card')
  if (!newCards.length) return false
  
  swipeCardAnimation(newCards[0], isWinner)

  setCardsToDeck(cards, false)
  if (newCards.length === 1) {
    setTimeout(() => {
      setCardsToDeck(cards, true)
      // state.setIsDone(true);
    }, 500)
  }
}

