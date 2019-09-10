import React from 'react';
import PropTypes from 'prop-types';

function Todo({ todo, index }) {
    return(
        <li>
            <span>{index + 1}. </span>
            {todo.title}
        </li>
    );
}

Todo.PropTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number
};

export default Todo