import React from 'react';
import { FaPlus } from "react-icons/fa6";
import './CreateButton.css';

const CreateButton = ({ onClick }) => {
    return (
        <button className="create-button" onClick={onClick}>
            <FaPlus className='icon' />
        </button>
    );
};

export default CreateButton;
