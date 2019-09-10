import React from 'react';
import Todo from './Todo';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
};

export default function TodoList() {
    return (
        <ul style={styles.ul}>
            <li>Todo 1</li>
            <li>Todo 2</li>
            <Todo />
        </ul>
    );
}