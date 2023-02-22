import React from "react";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

const Contact = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/')
    }
    return(
        <>
        <Header/>
        <section>
            <h1>Contact Page</h1>
            <button onClick={() => goToHome()}>Go to Home</button>
            <button onClick={() => navigate(-1)}>Go back</button>
        </section>
        </>
    )
}
export default Contact;