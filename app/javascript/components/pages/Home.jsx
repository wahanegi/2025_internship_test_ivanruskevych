import React from "react";
import { ToastContainer } from 'react-toastify';
import { TweetList } from "../organism";
import { SideBarList} from "../atoms";
import {useFetchUser} from "../../hooks";

const leftSideBarItems = [
    { name: "Home", navigate: "/" },
];

const rightSideBarItems = [
    { name: "#Ruby" },
    { name: "#Rails" },
    { name: "#React" },
    { name: "#Bootstrap" },
];

export const Home = () => {
    const { userEmail } = useFetchUser();
    return (
        <div className="container-fluid vh-100 bg-light">
            <div className="row h-100">
                {/* Left Sidebar */}
                <div className="col-3 bg-white border-end p-3">
                    <SideBarList items={leftSideBarItems} />
                    <div>
                        <a href={`mailto:${userEmail}`}>{userEmail}</a>
                    </div>
                </div>

                {/* Main Content */}
                <TweetList />

                {/* Right Sidebar */}
                <div className="col-3 bg-white border-start p-3">
                    <h4>What’s happening</h4>
                    <SideBarList items={rightSideBarItems} />
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};
