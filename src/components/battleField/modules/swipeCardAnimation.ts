import { removedCardClassName } from "../CONSTANT";

// カードスワイプのアニメーション
export const swipeCardAnimation = (frontCard: HTMLDivElement, isWinner: boolean) => {
    const moveOutWidth = document.body.clientWidth * 1.5;
    frontCard.classList.add(removedCardClassName);
    frontCard.style.transform = isWinner ? `translate(${moveOutWidth}px, -100px) rotate(-30deg)` : `translate(-${moveOutWidth}px, -100px) rotate(30deg)` 
}

