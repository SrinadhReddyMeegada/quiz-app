import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="Quiz Logo" />
      <h1>React Quiz App</h1>
    </header>
  );
}
