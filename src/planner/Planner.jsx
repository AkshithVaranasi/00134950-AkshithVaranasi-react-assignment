import React, { useState } from 'react';
import Tasks from '../tasks/Tasks';

export default function Planner() {
    const [todo, setTodo] = useState([]);

    const assignPlanner = (task) => {
        if (task.trim()) {
            setTodo([...todo, task]);
        }
    };

    return (
        <div>
            This is Parent
            {todo.map((task, index) => (
                <div key={index}>{task}</div>
            ))}
            <Tasks addTodo={assignPlanner} />
        </div>
    );
}
