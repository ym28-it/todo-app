

export function TaskList() {
    return (
        <div>
            <TaskListTitle/>
            <TaskListExplain/>
            <TaskListDelete/>
            <ul>
                <Task/>
            </ul>
        </div>
    )
}