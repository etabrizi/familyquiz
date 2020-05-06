import React from 'react';

function Links({ forward, back }) {

    return <nav className="navigation-links">
        <a id="forward" href="#" onClick={forward}><span className="icon-circle-right"></span>forward</a>
        <a id="back" href="#" onClick={back}><span className="icon-circle-left"></span>back</a>
    </nav>
}
export default React.memo(Links);