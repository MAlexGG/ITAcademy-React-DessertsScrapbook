import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Dessert from "../pages/dessert/Dessert";


export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/dessert/:index" element={<Dessert/>}/>
            </Routes>
        </BrowserRouter>
    )
} 