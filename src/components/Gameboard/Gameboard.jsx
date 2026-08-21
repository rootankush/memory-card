import Card from "../Card/Card.jsx";
import "../Gameboard/Gameboard.css";

export default function Gameboard({ cardList, handleCardClick }) {
  return (
    <main>
      <Card cardList={cardList} handleCardClick={handleCardClick}></Card>
    </main>
  );
}
