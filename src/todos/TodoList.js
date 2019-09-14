import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const styles = {
    ul: {
        width: '800px',
        listStyle: 'none',
        margin: '0 auto',
        padding: 0,
        textAlign: 'left'
    }
};

function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {
                props.todos.map((todo, index) => {
                    return <Todo todo={todo} key={todo.id} index={index} onChange={ props.onToggle } />
                })
            }
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
};

export default TodoList