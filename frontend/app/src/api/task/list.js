import client from "../client";

export const fetchCreateList = async (newListData) => {
    try {
        const res = await client.post("/lists/create", newListData);
        return res.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export const fetchRenameList = async (list_id, newListName) => {
    try {
        const res = await client.put(`/lists/${list_id}/rename`, newListName);
        return res.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export const fetchUpdateListExplain = async (list_id, listExplain) => {
    try {
        const res = await client.put(`/lists/${list_id}/explain`, listExplain);
        return res.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export const fetchDeleteList = async (list_id) => {
    try {
        await client.delete(`/lists/${list_id}`);
    } catch (e) {
        console.error(e);
        throw e;
    }
}
