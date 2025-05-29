

export function Task({ task }) {
    return (
        <li>
            <TaskName task={task}/>
            <TaskExplain task={task}/>
            <TaskStatus task={task}/>
            <TaskDelete task={task}/>
        </li>
    )
}