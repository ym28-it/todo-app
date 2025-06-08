import { TaskName } from "./TaskName.jsx";
import { TaskExplain } from "./TaskExplain.jsx";
import { TaskStatus } from "./TaskStatus.jsx";
import { TaskDelete } from "./TaskDelete.jsx";


export function Task({ task, onDeleteTask }) {
    return (
        <div className="task-item">
            <TaskName task={task}/>
            <TaskExplain task={task}/>
            <TaskStatus task={task}/>
            <TaskDelete task={task} onDelete={onDeleteTask}/>
        </div>
    )
}