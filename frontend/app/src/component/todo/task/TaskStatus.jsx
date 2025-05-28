import { useState, useEffect } from "react";

import { updateIsDone } from "../../../api/task/task.js";


export function TaskStatus() {
    const [isDone, setIsDone] = useState(false);

    // Todo: default isDone value most be equal to value fetched by updateIsDone firstly.
    // DB driven
    useEffect(() => {
        updateIsDone(isDone);
    }, [isDone]);


    return (
        <div>
            <p>Status:{ isDone ? 'Completed' : 'In Progress'}</p>
            <button onClick={() => setIsDone(!isDone)}>{ isDone ? 'Yet' : 'Done'}</button>
        </div>
    )
}
