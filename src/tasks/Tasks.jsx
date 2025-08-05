import React, { useState } from 'react';

export default function Tasks({ addTodo }) {
    const [task, setTask] = useState('');

    const addTask = () => {
        addTodo(task);
        setTask('');
    };

    return (
        <div>
            This is child
            <input
                type="text"
                value={task}
                onChange={(event) => setTask(event.target.value)}
            />
            <input type="button" value="Add Task" onClick={addTask} />
        </div>
    );
}
