import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';
import LanguageContext from '../LanguageContext';

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

function Todo({ todo, index, onChange }) {
    const classes = [];
    const { removeTodo } = useContext(Context);
    const language = useContext(LanguageContext);

    if (todo.completed){
        classes.push('done');
    }

    return(
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input
                    style={styles.input}
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)} />
                <span>{index + 1}. </span>
                {todo.title}
            </span>

            <button style={styles.button} onClick={() => removeTodo(todo.id) }>&times;</button>
            {/*<button style={styles.button} onClick={ removeTodo.bind(null, todo.id) }>&times;</button>*/}
        </li>
    );
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default Todo