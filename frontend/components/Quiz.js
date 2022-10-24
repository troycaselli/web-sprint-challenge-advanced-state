import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {selectAnswer, setMessage, setQuiz, fetchQuiz} from '../state/action-creators';

function Quiz(props) {
  const {quiz, selectedAnswer, infoMessage, selectAnswer, setMessage, setQuiz, fetchQuiz} = props;

  useEffect(() => {
    fetchQuiz();
  }, []);

  console.log(quiz);
  return (
    <div id="wrapper">
      {
        quiz !== null ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={selectedAnswer === quiz.answers[0].answer_id ? 'answer selected' : 'answer'}>
                {quiz.answers[0].text}
                <button>
                  {selectedAnswer === quiz.answers[0].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={selectedAnswer === quiz.answers[1].answer_id ? 'answer selected' : 'answer'}>
              {quiz.answers[1].text}
                <button>
                  {selectedAnswer === quiz.answers[1].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
    infoMessage: state.infoMessage
  }
}

export default connect(mapStateToProps, {selectAnswer, setMessage, setQuiz, fetchQuiz})(Quiz);