import axiosInstance from "../axiosConfig";


export const getLists = async (user_id) => {
    const res = await axiosInstance.get(`/lists/${user_id}`);
    return res.data;
}


export const createList = async (user_id, list_name="") => {
    const res = await axiosInstance.post('/lists/create', {
        user_id,
        list_name
    });
    return res.data;
}


export const renameList = async (list_id, list_name) => {
    const res = await axiosInstance.put(`/lists/${list_id}/rename`, { list_name });
    return res.data;
}

export const updateListExplain = async (list_id, list_explain) => {
    const res = await axiosInstance.put(`/lists/${list_id}/explain`, { list_explain });
    return res.data;
}


export const deleteList = async (list_id) => {
    await axiosInstance.delete(`/lists/${list_id}`);
}