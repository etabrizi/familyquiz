import React from 'react';

function Navigation({ navigation, currentSelection, changeSelection, isChecked, showAnswers }) {

    let navList = navigation.map(item => <li><a id={item.id} className={currentSelection === item.id ? "active" : ""} href="#" onClick={changeSelection}><span className={`icon-${item.icon ? item.icon : `flag`}`}></span>{item.linkCopy}</a></li>);
 
    return <ul className="lower-nav">
        {navList ? navList : <li>Sorry no quiz sections </li>}
        <li><input type="checkbox" onChange={showAnswers} checked={isChecked ? 'checked' : ''} /></li>
    </ul>
}
export default Navigation;