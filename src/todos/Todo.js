import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '4px 20px',
        padding: '0.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '3px'
    },

    input: {
        marginRight: '8px'
    },

    button: {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        backgroundColor: 'beige',
        marginLeft: '4px',
        textAlign: 'center',
        border: 'none',
        cursor: 'pointer'
    }
};

function Todo({ todo, index }) {
    return(
        <li style={styles.li}>
            <span>
                <input style={styles.input} type="checkbox" />
                <span>{index + 1}. </span>
                {todo.title}
            </span>

            <button style={styles.button}>&times;</button>
        </li>
    );
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number
};

export default Todo