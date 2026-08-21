import Gameboard from "./components/Gameboard/Gameboard";
import Header from "./components/Header/Header";
import "../src/index.css";
import { useState } from "react";
import useSound from "use-sound";
import clickSfx from "./assets/click.mp3";
import { cards } from "./data/data";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCardIds, setClickedCardIds] = useState([]);
  const [cardList, setCardList] = useState(cards);
  const [playClick] = useSound(clickSfx, { volume: 0.5 });

  function shuffle(arr) {
    const newArr = [...arr];
    let i = newArr.length;
    while (--i > 0) {
      const randIndex = Math.floor(Math.random() * (i + 1));
      [newArr[randIndex], newArr[i]] = [newArr[i], newArr[randIndex]];
    }
    return newArr;
  }

  function handleCurrentScore() {
    setCurrentScore(currentScore + 1);
  }

  function handleHighScore() {
    setHighScore(highScore + 1);
  }

  function handleCardClick(id) {
    playClick();
    if (clickedCardIds.includes(id)) {
      setCurrentScore(0);
      setClickedCardIds([]);
    } else {
      handleCurrentScore();
      setClickedCardIds([...clickedCardIds, id]);
      if (currentScore + 1 > highScore) {
        handleHighScore();
      }
    }
    setCardList(shuffle(cardList));
  }

  return (
    <>
      <Header currentScore={currentScore} highScore={highScore}></Header>
      <Gameboard
        cardList={cardList}
        handleCardClick={handleCardClick}
      ></Gameboard>
    </>
  );
}

export default App;
