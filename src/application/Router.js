import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../components/auth/login/Login";
import Signup from "../components/auth/signup/Signup";
import Dessert from "../pages/dessert/Dessert";


export default function Router() {

    const AuthRoute = ({ children }) => {
        if (localStorage.getItem('form')) {
            return <Navigate to='/' />
        }
        return children;
    };

    const AuthDessert = ({ children }) => {
        if (!localStorage.getItem('form')) {
            return <Navigate to='/login' />
        }
        return children;
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/dessert/:index" element={<AuthDessert><Dessert /></AuthDessert>} />
                <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
                <Route path="/signup" element={<AuthRoute><Signup/></AuthRoute>}/>
            </Routes>
        </BrowserRouter>
    )
} 