import React from "react";
import {Button} from "../atoms";
import {useFetchUser} from "../../hooks";

export const TweetCard = ({ user, content, likes, onDelete }) => {
    const { isLoggedIn} = useFetchUser();

    return (
        <div className={"border-bottom py-3 d-flex"}>
            <div className={"d-flex flex-column"}>
                <h6>{user?.email}</h6>
                <p>{content}</p>
                <p className="text-muted">{likes} likes</p>
            </div>
            {isLoggedIn && <Button type={"button"} onClick={onDelete}
                     className={"btn-outline-primary ms-auto align-self-end"}>Delete
                tweet</Button>}
        </div>
    );
};
