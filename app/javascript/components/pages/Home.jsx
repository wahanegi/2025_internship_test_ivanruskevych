import React, {useEffect, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import {fetchCurrentUser} from "../../services/userService";
import { TweetList } from "../organism";
import { SideBarList} from "../atoms";
import {apiErrorHandler} from "../../utils";

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
    const [currentUser, setCurrentUser] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const getUser = async () =>{
            try {
                const user = await fetchCurrentUser();

                if (user?.email){
                    setCurrentUser(user);
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (err) {
                apiErrorHandler(err);
                setIsLoggedIn(false);
            }
        }

        getUser();
    }, []);

    return (
        <div className="container-fluid vh-100 bg-light">
            <div className="row h-100">
                {/* Left Sidebar */}
                <div className="col-3 bg-white border-end p-3">
                    <SideBarList items={leftSideBarItems} />
                    <div>
                        <a href={`mailto:${currentUser?.email}`}>{currentUser?.email}</a>
                    </div>
                </div>

                {/* Main Content */}
                <TweetList currentUser={currentUser} isLoggedIn={isLoggedIn}/>

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
