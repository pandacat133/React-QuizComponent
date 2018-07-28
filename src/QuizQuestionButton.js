import React, { Component } from 'react';

class QuizQuestionButton extends Component{
    button_text = this.props.quiz_question.answer_options[0];

    render() {
        return(
            <li>
                <button>
                    {this.button_text}
                </button>
            </li>
        );
    }
}

export default QuizQuestionButton