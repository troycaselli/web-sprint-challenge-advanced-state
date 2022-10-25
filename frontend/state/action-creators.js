import axios from 'axios';

import {
  MOVE_CLOCKWISE, 
  MOVE_COUNTERCLOCKWISE, 
  SET_QUIZ_INTO_STATE, 
  SET_SELECTED_ANSWER, 
  SET_INFO_MESSAGE, 
  INPUT_CHANGE, 
  RESET_FORM
} from './action-types';


// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise(index) {
  return({type: MOVE_CLOCKWISE, payload: index});
}

export function moveCounterClockwise(index) {
  return({type: MOVE_COUNTERCLOCKWISE, payload: index});
}

export function selectAnswer(selected) { 
  return({type: SET_SELECTED_ANSWER, payload: selected})
}

export function setMessage(message) { 
  return({type: SET_INFO_MESSAGE, payload: message})
}

export function setQuiz(question) {
  return({type: SET_QUIZ_INTO_STATE, payload: question});
}

export function inputChange(object) {
  return({type: INPUT_CHANGE, payload: object})
}

export function resetForm() {
  return({type: RESET_FORM});
 }

// ❗ Async action creators
export const fetchQuiz = () => dispatch => {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    dispatch(setQuiz(null));
  axios.get('http://localhost:9000/api/quiz/next')
    .then(res => {
      dispatch(setQuiz(res.data));
    })
    .catch(err => console.error(err));
}
export const postAnswer = (quiz, answer) => dispatch => {
  axios.post('http://localhost:9000/api/quiz/answer', { "quiz_id": quiz, "answer_id": answer })
    .then(res => {
      dispatch(selectAnswer(null));
      dispatch(setMessage(res.data.message));
      dispatch(fetchQuiz());
    })
    .catch(err => console.error(err));
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
}

export const postQuiz = (form) => dispatch => {
  console.log(form);
  axios.post('http://localhost:9000/api/quiz/new', 
    { 
      "question_text": form.newQuestion, 
      "true_answer_text": form.newTrueAnswer, 
      "false_answer_text": form.newFalseAnswer 
    })
    .then(res => {
      dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`));
      dispatch(resetForm());
    })
    .catch(err => console.error(err));
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
