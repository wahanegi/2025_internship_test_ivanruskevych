import React, { useState } from "react";
import { Button } from "../atoms";
import {createTweet} from "../../services/tweetService";
import {toast} from "react-toastify";
import {apiErrorHandler} from "../../utils";

export const TweetForm = ({addTweet}) => {
    const [tweetContent, setTweetContent] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    console.log({tweetContent});
    const handleTweetSubmit = async (event) => {
        event.preventDefault();

        if (tweetContent.trim()){
            setIsSubmitting(true);
            try {
               const newTweet = await createTweet(tweetContent);
                addTweet(newTweet);
                setTweetContent("");
                toast.success('Tweet created successfully', { position: "top-center" });
            } catch (err){
                apiErrorHandler(err);
            } finally {
                setIsSubmitting(false)
            }
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
            disabled={isSubmitting}
        ></textarea>
            </div>
            <div className="d-flex justify-content-end">
                <Button type={"submit"} className={"btn-primary"} disabled={isSubmitting}>
                    {isSubmitting ? "Tweeting..." : "Tweet"}
                </Button>
            </div>
        </form>
    );
};
