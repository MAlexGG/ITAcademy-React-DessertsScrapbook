import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../components/auth/login/Login";
import Signup from "../components/auth/signup/Signup";
import Dessert from "../pages/dessert/Dessert";


export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/dessert/:index" element={<Dessert />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    )
} 