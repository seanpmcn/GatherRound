//import "./EmailVerification.css"
//import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function EmailVerification() {
  const navigate = useNavigate();

  return (
    <div>
      EmailVerification{" "}
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

export default EmailVerification;