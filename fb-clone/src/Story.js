import React from 'react';
import "./Story.css";
import { Avatar } from '@material-ui/core';

function Story({ image, profileSrc, title }) {
    return (
        <div classname='story'>
            <Avatar src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story
