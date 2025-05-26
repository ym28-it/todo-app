import axiosInstance from "../axiosConfig";

export const createTask = async () => {
    const res = await axiosInstance.get('/tasks/create');
    return res.data;
}

export const renameTask = async (task_id) => {
    const res = await axiosInstance.put(`/tasks/${task_id}/rename`);
    return res.data;
}

export const updateTaskExplain = async (task_id) => {
    const res = await axiosInstance.put(`/tasks/${task_id}/explain`);
    return res.data;
}

export const updateIsDone = async (task_id) => {
    const res = await axiosInstance.put(`/tasks/${task_id}/done`);
    return res.data;
}


export const deleteTask = async (task_id) => {
    await axiosInstance.delete(`/tasks/${task_id}`);
}