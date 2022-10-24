import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {selectAnswer, postAnswer, setMessage, setQuiz, fetchQuiz} from '../state/action-creators';

function Quiz(props) {
  const disabled = true;

  const {
    quiz, 
    selectedAnswer, 
    infoMessage, 
    selectAnswer, 
    postAnswer, 
    setMessage, 
    setQuiz, 
    fetchQuiz
  } = props;

  useEffect(() => {
    if(quiz === null) fetchQuiz();
  }, []);
  
  console.log(quiz);
  return (
    <div id="wrapper">
      {
        quiz !== null ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div 
                className={selectedAnswer === quiz.answers[0].answer_id ? 'answer selected' : 'answer'}
                onClick={() => selectAnswer(quiz.answers[0].answer_id)}
                >
                {quiz.answers[0].text}
                <button>
                  {selectedAnswer === quiz.answers[0].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div
                className={selectedAnswer === quiz.answers[1].answer_id ? 'answer selected' : 'answer'} 
                onClick={() => selectAnswer(quiz.answers[1].answer_id)}
                >
              {quiz.answers[1].text}
                <button>
                  {selectedAnswer === quiz.answers[1].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button 
              id="submitAnswerBtn" 
              onClick={() => postAnswer(quiz.quiz_id, selectedAnswer)}
              disabled={selectedAnswer ? !disabled : disabled}
            >
              Submit answer
            </button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer
  }
}

export default connect(mapStateToProps, {selectAnswer, postAnswer, setMessage, setQuiz, fetchQuiz})(Quiz);