import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  const {form, inputChange, postQuiz} = props;

  const onChange = evt => {
    console.log(evt.target.id);
    inputChange({id: evt.target.id, value: evt.target.value});
  }

  const onSubmit = evt => {
    evt.preventDefault();
    postQuiz(form);
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} value={form.newQuestion} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} value={form.newTrueAnswer} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} value={form.newFalseAnswer} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    form: state.form
  }
}

export default connect(mapStateToProps, actionCreators)(Form)
