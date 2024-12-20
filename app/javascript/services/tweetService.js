import { httpService } from "./httpService";

const fetchTweets = async () => {
        const { data } = await httpService.get("/tweets");
        return data;
}

const fetchTweetById = async (id) => {
    const { data } = await httpService.get(`/tweets/${id}`);
    return data;
};

const createTweet = async (content) => {
    const { data } = await httpService.post("/tweets", { content });
    return data;
};

const deleteTweetById = async (id) => {
    return httpService.delete(`/tweets/${id}`);
};

export const tweetService = {
    fetchTweets,
    fetchTweetById,
    createTweet,
    deleteTweetById,
}