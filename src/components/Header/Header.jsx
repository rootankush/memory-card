import "./Header.css";

export default function Header({ currentScore, highScore }) {
  return (
    <header>
      <h1>Memory Card Game</h1>
      <hr />
      <h1 className="describtion">click each card once, don't repeat</h1>
      <h1 className="describtion">scroll for more cards</h1>
      <div className="score-card">
        <h1>High Score:{highScore}</h1>
        <h1>Score:{currentScore}</h1>
      </div>
    </header>
  );
}
