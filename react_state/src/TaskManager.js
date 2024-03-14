import React, { useState } from 'react';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        const newTask = {
            id: Date.now(),
            title: "New Task",
            completed: false
        };
        setTasks(prevTasks => [...prevTasks, newTask]);
    };


    const toggleTaskCompletion = (taskId) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </span>
                        <button onClick={() => toggleTaskCompletion(task.id)}>
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;
