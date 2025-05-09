import client from "../client";

export const fetchCreateUser = async (newUserData) => {
    try {
        const res = await client.post("/users/create", newUserData);
        return res.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export const fetchReadUser = async (user_id) => {
    try {
        const res = await client.get(`/users/${user_id}`);
        return res.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export const fetchLogin = async (loginData) => {
    try {
        const res = await client.post("/users/login", loginData);
        return res.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export const fetchRenameUserName = async (user_id, newUserName) => {
    try {
        const res = await client.put(`/users/${user_id}/rename`, newUserName);
        return res.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export const fetchDeleteUser = async (user_id) => {
    try {
        await client.delete(`/users/${user_id}`);
    } catch (e) {
        console.error(e);
        throw e;
    }
}
