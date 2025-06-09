import { useState, useEffect } from "react";
import { TaskListTitle } from "./TaskListTitle.jsx";
import { TaskListExplain } from "./TaskListExplain.jsx";
import { TaskListDelete } from "./TaskListDelete.jsx";
import { AddTask } from "../task/AddTask.jsx";
import { Task } from "../task/Task.jsx";

import { getTasks } from "../../../api/task/task.js";

export function TaskList({ taskList, onDeleteTaskList }) {
    const [tasks, setTasks] = useState([]); // Initialize tasks state

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const tasksData = await getTasks(taskList.list_id);
                console.log('Fetched tasks:', tasksData);
                setTasks(tasksData);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        }
        fetchTasks();
    }, []);

    const handleAddTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]); // Update tasks state with the new task
    }

    const handleDeleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter(task => task.task_id !== taskId)); // Remove the task from the state
    }


    return (
        <div>
            <TaskListTitle taskList={taskList} />
            <TaskListExplain taskList={taskList} />
            <TaskListDelete taskList={taskList} onDelete={onDeleteTaskList} />
            <div>
                <h2>Tasks</h2>
                <AddTask taskListId={taskList.list_id} onAdd={handleAddTask} />
                <div className="task-list">
                    {tasks.map((task) => (
                        <Task key={task.task_id} task={task} onDeleteTask={handleDeleteTask} />
                    ))}
                </div>
            </div>
        </div>
    )
}