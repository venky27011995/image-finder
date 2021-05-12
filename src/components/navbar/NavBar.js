import React from 'react';

export const NavBar = (props) => {
    return (
        <div className="navbar">
            <h2 title={props.title}>{props.title}</h2>
        </div>
            )
}
