import React from "react";

export const TweetCard = ({ user, content, likes }) => {
    return (
        <div className={"border-bottom py-3"}>
            <h6>{user}</h6>
            <p>{content}</p>
            <p className="text-muted">{likes} likes</p>
        </div>
    );
};
