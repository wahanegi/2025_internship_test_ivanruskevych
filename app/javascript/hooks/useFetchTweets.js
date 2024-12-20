import { useState, useEffect } from "react";
import {tweetService} from "../services";
import {apiErrorHandler} from "../utils";
import {toast} from "react-toastify";

export const useFetchTweets = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(  () => {
        const loadTweets = async () => {
            try {
                const data = await tweetService.fetchTweets();
                setTweets(data);
            } catch (err) {
                apiErrorHandler(err);
            }
        };

        loadTweets();
    }, []);

    const deleteTweet = async (tweetId) => {
        try {
            await tweetService.deleteTweetById(tweetId);
            setTweets((prevState)=> prevState.filter((tweet)=> tweet.id !== tweetId))
            toast.success("Tweet deleted successfully", { position: "top-center" })
        } catch (err) {
            apiErrorHandler(err);
        }
    };

    return { tweets, setTweets, deleteTweet };
};
