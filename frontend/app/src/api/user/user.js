import axiosInstance from "../axiosConfig";


export const logIn = async () => {
    const res = await axiosInstance.post('/users/login');
    return res.data;
}


export const createUser = async () => {
    const res = await axiosInstance.post('/users/create');
    return res.data;
}


export const readUser = async (user_id) => {
    const res = await axiosInstance.get(`/users/${user_id}`);
    return res.data;
}


export const renameUserName = async (user_id) => {
    const res = await axiosInstance.put(`/users/${user_id}/rename`);
    return res.data;
}


export const deleteUser = async (user_id) => {
    await axiosInstance.delete(`/users/${user_id}`);
}