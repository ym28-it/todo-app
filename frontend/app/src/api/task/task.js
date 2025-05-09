import client from "../client";

export const fetchCreateTask = async (newTaskData) => {
    try {
        const res = await client.post("/tasks/create", newTaskData);
        return res.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export const fetchRenameTask = async (task_id, newTaskName) => {
    try {
        const res = await client.put(`/tasks/${task_id}/rename`, newTaskName);
        return res.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export const fetchUpdateTaskExplain = async (task_id, taskExplain) => {
    try {
        const res = await client.put(`/tasks/${task_id}/explain`, taskExplain);
        return res.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export const fetchUpdateIsDone = async (task_id, isDoneBool) => {
    try {
        const res = await client.put(`/tasks/${task_id}/done`, isDoneBool);
        return res.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export const fetchDeleteTask = async (task_id) => {
    try {
        await client.delete(`/tasks/${task_id}`);
    } catch (e) {
        console.error(e);
        throw e;
    }
}
