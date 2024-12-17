import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TweetCard } from "../molecules";
import { TweetForm } from "../organism";

const initialTweetsState = [
    {
        id: uuidv4(),
        user: "@username",
        content: "This is my first tweet!",
        likes: 10,
    },
];

export const TweetList = () => {
    const [tweets, setTweets] = useState(initialTweetsState);
    const addTweet = (newTweet) => {
        setTweets([newTweet, ...tweets]);
    };

    return (
        <div className={"col-6 p-3 overflow-auto scrollbar--hide"}>
            <h5 className="mb-3">Home</h5>
            <TweetForm onTweetSubmit={addTweet} />
            <div>
                {tweets.map((tweet) => (
                    <TweetCard key={tweet.id} {...tweet} />
                ))}
            </div>
        </div>
    );
};
