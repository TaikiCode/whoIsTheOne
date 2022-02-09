import { removedCardClassName, swipeCardClassName } from "../CONSTANT"

// 対戦カードをデッキにセットする
export const setCardsToDeck = (cards: any[], isReset: boolean) => {
  const cardLength = cards.length

  const newCards = isReset
    ? cards
    : cards.filter((card) => card.className === swipeCardClassName)

  newCards.forEach((card, index) => {
    if (isReset) card.classList.remove(removedCardClassName)
    card.style.zIndex = cardLength - index
    card.style.transform =
      'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)'
    card.style.opacity = (10 - index) / 10
  })
}

