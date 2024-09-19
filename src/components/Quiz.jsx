import { useState } from "react";
import QUESTIONS from "../questions.js";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevState, selectedAnswer];
    });
  }
  console.log(userAnswers);

  return (
    <div id="quiz">
      <div id="questions">
        <p>Currently active question</p>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

//How am I handelling the state of this Component
//Question is derived from the number of questions answered.
//if (Zero questions answered ){
//     (display index[0] as question on screen to the user)
// }else if(One question answered){
//     (display index[1] as question on screen to the user)
// }
