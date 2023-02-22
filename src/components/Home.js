import React from "react";
import Header from './Header';
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    )
}
export default Home;