const Functions = (state) => {

    const setCards = (cards, isReset) => {
      const cardLength = cards.length;
      const newCards = isReset
        ? cards
        : cards.filter((item) => item.className === "tinder--card");

      newCards.forEach((card, index) => {
        if (isReset) card.classList.remove("removed");
        card.style.zIndex = cardLength - index;
        card.style.transform =
          "scale(" + (20 - index) / 20 + ") translateY(-" + 30 * index + "px)";
        card.style.opacity = (10 - index) / 10;
      });
    };

    const swipeAnimation = (cards, isLove) => {
      const newCards = cards.filter((item) => item.className === "tinder--card");
      var moveOutWidth = document.body.clientWidth * 1.5;
      if (!newCards.length) return false;
      var card = newCards[0];
      card.classList.add("removed");
  
      if (isLove) {
        card.style.transform =
          "translate(" + moveOutWidth + "px, -100px) rotate(-30deg)";
      } else {
        card.style.transform =
          "translate(-" + moveOutWidth + "px, -100px) rotate(30deg)";
      }
      setCards(cards, false);
      if (newCards.length === 1) {
        setTimeout(() => {
          setCards(cards, true);
          state.setIsDone(true);
        }, 500);
      }
    };
    return { setCards, swipeAnimation };
  };
  
  export default Functions;