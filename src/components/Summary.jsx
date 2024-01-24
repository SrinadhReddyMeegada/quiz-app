import quizCompleteImg from "../assets/quiz-complete.png";
export default function Summary() {
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz Complete Image" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">10%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
    </div>
  );
}
