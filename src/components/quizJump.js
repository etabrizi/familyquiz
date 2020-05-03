import React, { Fragment } from 'react';

function QuizJump({ getJumpValue, stepperValue, updateStepper }) {
    return <Fragment>
        <form onSubmit={getJumpValue}>
            <input type="text" name="stepper" onChange={updateStepper} value={stepperValue} />
        </form>
    </Fragment>
}
export default QuizJump;