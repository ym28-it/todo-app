import { useState } from "react";
import { TaskListTitle } from "./TaskListTitle.jsx";
import { TaskListExplain } from "./TaskListExplain.jsx";
import { TaskListDelete } from "./TaskListDelete.jsx";
import { AddTask } from "../task/AddTask.jsx";
import { Task } from "../task/Task.jsx";

export function TaskList({ taskList }) {
    const [tasks, setTasks] = useState(taskList.tasks || []); // Initialize tasks state

    const handleAddTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]); // Update tasks state with the new task
    }

    return (
        <div>
            <TaskListTitle/>
            <TaskListExplain/>
            <TaskListDelete/>
            <div>
                <h2>Tasks</h2>
                <AddTask taskListId={taskList.list_id} onAdd={handleAddTask} />
                <div className="task-list">
                    {tasks.map((task) => (
                        <Task key={task.task_id} task={task} />
                    ))}
                </div>
            </div>
        </div>
    )
}