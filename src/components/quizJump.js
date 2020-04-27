import React from 'react';

function QuizJump({ getJumpValue }) {
    return <div>
        <form onSubmit={getJumpValue}>
            <input type="text" name="stepper" />
        </form>
    </div>
}
export default QuizJump;