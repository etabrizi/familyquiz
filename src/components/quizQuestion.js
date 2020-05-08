import React, { Fragment, useState, useEffect } from 'react';
import Video from "./video";



function QuizQuestion({ step, quizCategory, isChecked, setQuestionLength }) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`./static/${quizCategory}.json`)
            .then(res => res.json())
            .then(
                (results) => {
                    setIsLoaded(true);
                    setQuestionLength(results[quizCategory].length);
                    setItems(results[quizCategory][step]);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [step, quizCategory, setQuestionLength])

    if (error) {
        return <div>
            <p>Sorry, There's been an issue loading in those quiz questions:</p>
            <p>Error code: {error.message}</p>
            <button onClick={() => { window.location.reload(false) }}>Reload Quiz</button>
        </div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <Fragment>
                <h1>{isChecked ? items.answer : items.title}</h1>
                <h2 className={items.options ? '' : 'hide'}>
                    {items.options ? `A:${items.options[0]} B:${items.options[1]} C:${items.options[2]} D:${items.options[3]}` : ''}</h2>
                {items.type === 'image' ? <img src={items.src} alt="quiz question" width={500} /> : <Video src={items.src} />}
            </Fragment >
        );
    }
}



export default QuizQuestion;