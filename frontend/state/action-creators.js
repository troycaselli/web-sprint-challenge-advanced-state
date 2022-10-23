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

export function setMessage() { }

export function setQuiz(question) {
  return({type: SET_QUIZ_INTO_STATE, payload: question});
}

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export const fetchQuiz = () => dispatch => {
  dispatch(setQuiz(null));
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
