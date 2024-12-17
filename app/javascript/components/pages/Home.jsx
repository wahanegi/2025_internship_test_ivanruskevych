import React from "react";
import { TweetList } from "../organism";
import {Button, SideBarList} from "../atoms";
import {Link} from "react-router-dom";

const leftSideBarItems = [
    { name: "Home", navigate: "/pages" },
];

const rightSideBarItems = [
    { name: "#Ruby" },
    { name: "#Rails" },
    { name: "#React" },
    { name: "#Bootstrap" },
];

export const Home = () => {

    const handleSignIn=()=>{
        window.location.href = "/users/sign_in"
    }

    return (
        <div className="container-fluid vh-100 bg-light">
            <div className="row h-100">
                {/* Left Sidebar */}
                <div className="col-3 bg-white border-end p-3">
                    <SideBarList items={leftSideBarItems} />
                    <Button onClick={handleSignIn} className={"btn-primary"}>Sign in</Button>
                </div>

                {/* Main Content */}
                <TweetList />

                {/* Right Sidebar */}
                <div className="col-3 bg-white border-start p-3">
                    <h4>What’s happening</h4>
                    <SideBarList items={rightSideBarItems} />
                </div>
            </div>
        </div>
    );
};
