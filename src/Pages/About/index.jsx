import React from "react";
import { useNavigate } from "react-router-dom";
// import Navigation from "../../Component/Navigation";

const About = () => {
    let navigate =useNavigate();
    const onBtnClick = () =>{
        navigate("/");
    }
    return (
        <div>
            <h1> this is my About page</h1>
            {/* <Navigation/> */}
            <button onClick={onBtnClick}>redirect to home</button>
        </div>
    )
}
export default About