import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import LandingPage from "../../pages/LandingPage";
import Dwelling from "../../pages/Dwelling";
import Vintage from "../../pages/Vintage";
import ZeroWaste from "../../pages/ZeroWaste";
import Pottery from "../../pages/Pottery";
import Login from "../../pages/Login";
import Search from "../../pages/Search";
import Cart from '../../pages/Cart';

function Router() {
    return (
        <BrowserRouter>

            <Routes>
                {/*This is the root page, aka landing route*/}
                <Route path="/home" element={  
                    <LandingPage />
                } />

                <Route path="/vintage" element={
                    <Vintage />
                } />

                <Route path="/pottery" element={
                    <Pottery />
                } />

                <Route path="/zerowaste" element={
                    <ZeroWaste />
                } />

                <Route path="/dwelling" element={
                    <Dwelling />
                } />

                <Route path="/login" element={
                    <Login />
                } />

                <Route path="/search" element={
                    <Search />
                } />

                <Route path="/cart" element={
                    <Cart />
                } />

            </Routes>
        
        </BrowserRouter>
    )
};

export default Router;