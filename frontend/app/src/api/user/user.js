import axiosInstance from "../axiosConfig";


export const logIn = async () => {
    
}


export const createUser = async () => {
    const res = await axiosInstance.post('/users/create');
    return res.data;
}


export const readUser = async (user_id) => {
    const res = await axiosInstance.get(`/users/${user_id}`);
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