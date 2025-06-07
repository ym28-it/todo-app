import axiosInstance from "../axiosConfig";


export const createTask = async (list_id, task_name) => {
    const res = await axiosInstance.post('/tasks/create', {
        task_name,
        list_id
    });
    return res.data;
}

export const renameTask = async (task_id, task_name) => {
    const res = await axiosInstance.put(`/tasks/${task_id}/rename`, { task_name });
    return res.data;
}

export const updateTaskExplain = async (task_id, task_explain) => {
    const res = await axiosInstance.put(`/tasks/${task_id}/explain`, { task_explain });
    return res.data;
}

export const updateIsDone = async (task_id, is_done) => {
    const res = await axiosInstance.put(`/tasks/${task_id}/done`, { is_done });
    return res.data;
}


export const deleteTask = async (task_id) => {
    await axiosInstance.delete(`/tasks/${task_id}`);
}