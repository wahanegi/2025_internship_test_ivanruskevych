import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "../components/pages";

export default (
    <Router>
        <Routes>
            <Route path="/pages/users" element={<Home />} />
        </Routes>
    </Router>
);