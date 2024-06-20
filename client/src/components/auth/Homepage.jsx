//import "./Homepage.css"
//import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Homepage() {
    const navigate = useNavigate();


    return (
    <div>
        Homepage{" "}
        <button
        onClick={() => {
            navigate("/");
        }}
        >
        Go to Login page
        </button>
    </div>
    );
    }

export default Homepage;
