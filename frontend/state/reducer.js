import {
  MOVE_CLOCKWISE, 
  MOVE_COUNTERCLOCKWISE, 
  SET_QUIZ_INTO_STATE, 
  SET_SELECTED_ANSWER, 
  SET_INFO_MESSAGE, 
  INPUT_CHANGE, 
  RESET_FORM
} from './action-types';

// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux';

const initialWheelState = 0
const wheel = (state = initialWheelState, action) => {
  switch(action.type) {
    case MOVE_CLOCKWISE: 
      if(action.payload === 5) {
        return 0
      }
      return action.payload + 1;
    case MOVE_COUNTERCLOCKWISE:
      if(action.payload === 0) {
        return 5
      }
      return action.payload - 1;
    default:
      return state;
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case SET_QUIZ_INTO_STATE:
      return action.payload;
    default:
      return state;
    }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form });
