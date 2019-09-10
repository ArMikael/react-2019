import React from 'react';
import Todo from './Todo';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        textAlign: 'left'
    }
};

export default function TodoList(props) {
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