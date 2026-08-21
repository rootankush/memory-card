import "./Header.css";

export default function Header({ currentScore, highScore }) {
  return (
    <header>
      <h1>Memory Card Game</h1>
      <div className="score-card">
        <h1>High Score:{highScore}</h1>
        <h1>Score:{currentScore}</h1>
      </div>
    </header>
  );
}
