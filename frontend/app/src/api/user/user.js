import axiosInstance from "../axiosConfig";


export const logIn = async (email, password) => {
    const res = await axiosInstance.post('/users/login', {
        email,
        password
    });
    return res.data;
}


export const createUser = async (user_name, email, password) => {
    const res = await axiosInstance.post('/users/create', {
        user_name,
        email,
        password
    });
    return res.data;
}


export const readUser = async (user_id) => {
    const res = await axiosInstance.get(`/users/${user_id}`);
    return res.data;
}


export const renameUserName = async (user_id, user_name) => {
    const res = await axiosInstance.put(`/users/${user_id}/rename`, { user_name });
    return res.data;
}


export const deleteUser = async (user_id) => {
    await axiosInstance.delete(`/users/${user_id}`);
}