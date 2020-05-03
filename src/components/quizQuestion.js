import React, { Fragment } from 'react';
import Video from "./video";

function QuizQuestion({ title, type, src, options, answer, isChecked }) {
    return <Fragment>
        <h1>{isChecked ? answer : title}</h1>
        <h2 className={options ? '' : 'hide'}>
            {options ? `A:${options[0]} B:${options[1]} C:${options[2]} D:${options[3]}` : ''}</h2>
        {type === 'image' ? <img src={src} width={500} /> : <Video src={src} />}
    </Fragment>
}
export default QuizQuestion;