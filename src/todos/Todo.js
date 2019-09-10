import React from 'react';

export default function Todo({ todo, index }) {
    return(
        <li>
            <span>{index + 1}. </span>
            {todo.title}
        </li>
    );
}