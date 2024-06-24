import React from "react";
import "./CreateClubModal.css";

const CreateClubModal = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className='create-club-modal__wrapper'>
            <div className='create-club-modal__content'>
                <h2>Create a New Club</h2>
                <form>
                    <div className='create-club-modal__input-box'>
                        <input id='club-name' type='text' placeholder='Club Name' required />
                    </div>
                    <div className='create-club-modal__input-box'>
                        <textarea id='club-description' placeholder='Description'></textarea>
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
