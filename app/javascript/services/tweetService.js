import { api } from "./api";

export const fetchTweets = async () => {
        const { data } = await api.get("/tweets");
        return data;
}

export const fetchTweetById = async (id) => {
    const { data } = await api.get(`/tweets/${id}`);
    return data;
};

export const createTweet = async (content) => {
    const { data } = await api.post("/tweets", { content });
    return data;
};

export const deleteTweetById = async (id) => {
    return await api.delete(`/tweets/${id}`);
};