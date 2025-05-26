import axiosInstance from "../axiosConfig";


export const createList = async () => {
    const res = await axiosInstance.post('/lists/create');
    return res.data;
}


export const renameList = async (list_id) => {
    const res = await axiosInstance.put(`/lists/${list_id}/rename`);
    return res.data;
}

export const updateListExplain = async (list_id) => {
    const res = await axiosInstance.put(`/lists/${list_id}/explain`);
    return res.data;
}


export const deleteList = async (list_id) => {
    await axiosInstance.delete(`/lists/${list_id}`);
}