import React, { useState } from "react";
import "./CreateClubModal.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase"

const CreateClubModal = ({ show, onClose }) => {
    const [clubName, setClubName] = useState("");
    const [clubDescription, setClubDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "TestCollection"), {
                name: clubName,
                description: clubDescription,
                createdAt: new Date()
            });
            console.log("Document successfully created!")
            onClose(); // close the modal after successful submission
        } catch (error) {
            console.log("Error creating document: ", error);
        }
    }

    if (!show) {
        return null;
    }

    return (
        <div className='create-club-modal__wrapper'>
            <div className='create-club-modal__content'>
                <h2>Create a New Club</h2>
                <form onSubmit={handleSubmit}>
                    <div className='create-club-modal__input-box'>
                        <input id='club-name' type='text' placeholder='Club Name' value={clubName} onChange={(e) => setClubName(e.target.value)} required />
                    </div>
                    <div className='create-club-modal__input-box'>
                        <textarea id='club-description' placeholder='Description' value={clubDescription} onChange={(e) => setClubDescription(e.target.value)}></textarea>
                    </div>
                    <div className='create-club-modal__buttons'>
                        <button className='create-club-modal__cancel' type='button' onClick={onClose}>Cancel</button>
                        <button className='create-club-modal__submit' type='submit'>Create Club</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateClubModal;
