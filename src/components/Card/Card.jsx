import { cards } from "../../data/data";
import "../Card/Card.css";

export default function Card(handleCardClick) {
  const cardList = cards.map((card) => (
    <button
      type="button"
      className="cardBox"
      key={card.id}
      onClick={handleCardClick}
    >
      <img key={card.id} src={card.img} alt={card.name} />
      <h2>{card.title}</h2>
      <h3>{card.name}</h3>
    </button>
  ));
  return <>{cardList}</>;
}
