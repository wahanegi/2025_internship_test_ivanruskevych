import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../atoms";

export const TweetForm = ({ onTweetSubmit }) => {
    const [tweetContent, setTweetContent] = useState("");

    const handleTweetSubmit = (event) => {
        event.preventDefault();

        if (tweetContent.trim()) {
            const newTweet = {
                id: uuidv4(),
                user: "username",
                content: tweetContent,
                likes: 0,
            };

            onTweetSubmit(newTweet);
            setTweetContent("");
        }
    };

    const handleOnChange = (event) => {
        setTweetContent(event.target.value);
    };

    return (
        <form onSubmit={handleTweetSubmit}>
            <div className="mb-3">
        <textarea
            className="form-control"
            rows="3"
            placeholder="What is happening?!"
            value={tweetContent}
            onChange={handleOnChange}
        ></textarea>
            </div>
            <div className="d-flex justify-content-end">
                <Button type={"submit"} className={"btn-primary"}>
                    Tweet
                </Button>
            </div>
        </form>
    );
};
