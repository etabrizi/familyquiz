import React from 'react';

function Video({ src }) {
    return <div className="video-container">
        <span className="top-bar"></span>
        <iframe title="quiz question" width="500" height="315" src={src}></iframe>
        <span className="bottom-bar"></span>
    </div>
}
export default Video;