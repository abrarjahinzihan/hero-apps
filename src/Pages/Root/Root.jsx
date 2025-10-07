import React from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer";

const Root = () => {
    return (
        <div>
        <Navbar></Navbar>
        <div className="bg-gray-50">
            <div className="">
            <Outlet></Outlet>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Root;