function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React quiz!</h2>
      <h3>{numQuestions} question to testyour React mastery</h3>
      <button class="btn btn-ui" onClick={() => dispatch({ type: "start" })}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
