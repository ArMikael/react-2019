import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        textAlign: 'left'
    }
};

function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {
                props.todos.map((todo, index) => {
                    return <Todo todo={todo} key={todo.id} index={index} />
                })
            }
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TodoList