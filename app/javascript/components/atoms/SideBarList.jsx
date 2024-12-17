import React from "react";
import {Link} from "react-router-dom";

export const SideBarList = ({ items }) => {
    return (
        <ul className="list-unstyled">
            {items.map((item) => (
                <li key={item.name} className="my-2">
                   <Link to={item.navigate}>{item.name}</Link>
                </li>
            ))}
        </ul>
    );
};
