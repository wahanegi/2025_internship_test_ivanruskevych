import {useEffect, useMemo, useState} from "react";
import {userService} from "../services";
import {apiErrorHandler} from "../utils";

export const useFetchUser = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const getUser = async () => {
            try {
                const user = await userService.fetchCurrentUser();

                if (user?.email) {
                    setCurrentUser(user);
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (err) {
                apiErrorHandler(err);
                setIsLoggedIn(false);
            }
        };

        getUser();
    }, []);

    const userEmail = useMemo(() => currentUser?.email, [currentUser]);

    return { currentUser, isLoggedIn, userEmail };
};

