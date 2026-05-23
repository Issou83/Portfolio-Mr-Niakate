import React from 'react';
import { NavLink } from 'react-router-dom';

const Buttons = (props) => {
    return (
        <div className="scroll-bottom">
            {props.left && (
            <NavLink to={props.left} className="left hover" aria-label="Page précédente">
                <span>&#10092;</span>
            </NavLink>
            )}
            {props.right && (
            <NavLink to={props.right} className="right hover" aria-label="Page suivante">
                <span>&#10093;</span>
            </NavLink>
            )}
        </div>
    );
};

export default Buttons;
