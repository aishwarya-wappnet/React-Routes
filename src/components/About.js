import React from "react";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

const About = () => {
    const navigate = useNavigate();
    const goToContact = () => {
        navigate("/contact");
    }
    return (
        <>
        <Header/>
        <section>
            <h1>About Page</h1>
            <button onClick={() => goToContact()}>Go to contact page</button>
            <button onClick={() => navigate(-1)}>Go back</button>
        </section>
        </>
    )
}
export default About;