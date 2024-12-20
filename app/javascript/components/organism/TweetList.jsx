import React, {useCallback} from "react";
import { TweetCard } from "../molecules";
import { TweetForm } from "../organism";
import {useFetchTweets, useFetchUser} from "../../hooks";

export const TweetList = () => {
    const { currentUser, isLoggedIn} = useFetchUser();
    const {tweets, setTweets, deleteTweet} = useFetchTweets();

    const addTweet = useCallback(
        (newTweet) => {
            setTweets((prevTweets) => [{...newTweet, user: currentUser}, ...prevTweets]);
        }, [currentUser]
    )

    return (
        <div className={"col-6 p-3 overflow-auto scrollbar--hide"}>
            <h5 className="mb-3">Home</h5>
            {isLoggedIn && <TweetForm addTweet={addTweet}/>}
            <div>
                {tweets.map((tweet) => (
                    <TweetCard key={tweet.id} {...tweet} onDelete={()=> deleteTweet(tweet.id)} />
                ))}
            </div>
        </div>
    );
};
