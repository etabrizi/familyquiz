import React from 'react';

function QuizJump({ getJumpValue }) {
    return <React.Fragment>
        <form onSubmit={getJumpValue}>
            <input type="text" name="stepper" />
        </form>
    </React.Fragment>
}
export default QuizJump;