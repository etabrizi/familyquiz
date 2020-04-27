import React from 'react';

function Navigation({ currentSelection, changeSelection, isChecked, showAnswers }) {
    return <ul className="lower-nav">
        <li><a id="movies" className={currentSelection === "movies" ? "active" : ""} href="#" onClick={changeSelection}><span className="icon-video-camera"></span>Films</a></li>
        <li><a id="leoSpaceQuestions" className={currentSelection === "leoSpaceQuestions" ? "active" : ""} href="#" onClick={changeSelection}><span className="icon-rocket"></span>Leo's Space Quiz</a></li>
        <li><a id="songs" href="#" className={currentSelection === "songs" ? "active" : ""} onClick={changeSelection}><span className="icon-headphones"></span>80's songs</a></li>
        <li><a id="flags" href="#" className={currentSelection === "flags" ? "active" : ""} onClick={changeSelection}><span className="icon-flag"></span>Flags</a></li>
        <li><input type="checkbox" onChange={showAnswers} checked={isChecked ? 'checked' : ''} /></li>
    </ul>
}
export default Navigation;