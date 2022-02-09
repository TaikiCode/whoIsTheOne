import { removedCardClassName, swipeCardClassName } from "../CONSTANT"


// スワイプ対象のカードだけ取得（存在しているカード）
export const getSwipingCards = (allCards: any[]): any[] => allCards.filter((card) => card.className === swipeCardClassName)






export const getRemovedCards = (allCards: any[]): any[] => allCards.filter((card) => card.className !== swipeCardClassName)



// // スワイプ対象のカードだけ取得（存在しているカード）
// export const getSwipingCards = (allCards: any[]): any[] => {
//     return allCards.filter((card) => card.className === swipeCardClassName)
// }


