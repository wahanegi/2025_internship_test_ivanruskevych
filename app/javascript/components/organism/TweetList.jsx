import React, { useState, useEffect } from "react";
import { TweetCard } from "../molecules";
import { TweetForm } from "../organism";
import {deleteTweetById, fetchTweets} from "../../services/tweetService";
import {apiErrorHandler} from "../../utils";
import {toast} from "react-toastify";

export const TweetList = ({ currentUser, isLoggedIn }) => {
    const [tweets, setTweets] = useState([]);

    const addTweet = (newTweet) => {
        setTweets((prevTweets) => [{...newTweet, user: currentUser}, ...prevTweets]);
    };

    const handleDeleteTweet = async (tweetId)=>{
        try {
            await deleteTweetById(tweetId);
            setTweets((prevState)=> prevState.filter((tweet)=> tweet.id !== tweetId))
            toast.success("Tweet deleted successfully", { position: "top-center" })
        } catch (err) {
            apiErrorHandler(err);
        }
    }

    useEffect(  () => {
        const loadTweets = async () => {
            try {
                const data = await fetchTweets();
                setTweets(data);
            } catch (err) {
                apiErrorHandler(err);
            }
        };

         loadTweets();
    }, []);

    return (
        <div className={"col-6 p-3 overflow-auto scrollbar--hide"}>
            <h5 className="mb-3">Home</h5>
            {isLoggedIn && <TweetForm addTweet={addTweet}/>}
            <div>
                {tweets.map((tweet) => (
                    <TweetCard key={tweet.id} {...tweet} isLoggedIn={isLoggedIn} onDelete={()=> handleDeleteTweet(tweet.id)} />
                ))}
            </div>
        </div>
    );
};
