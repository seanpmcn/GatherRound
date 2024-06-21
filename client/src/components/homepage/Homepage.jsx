import "./Homepage.css"; 
import CreateButton from "../common/CreateButton/CreateButton"; 
import { useNavigate } from "react-router-dom"; 

function Homepage() {
    const navigate = useNavigate();

    // Temporary list of club names
    const tempClubList = [
        'The Catan Conquerors',
        'DnD Dragonslayers',
        'Risk Rulers',
        'Clue Sleuths',
        'Chess Champions'
    ];

    return (
        <div>
            <div className='header'>
                <h1>GatherRound</h1>
                <p>Let the games begin!</p>
            </div>
            <div className='homepage-wrapper'>
                {/* Main wrapper for the homepage content */}
                <div className='scrollable-list'>
                    {/* Scrollable list of club buttons */}
                    {tempClubList.map((club, index) => (
                        <button key={index} className='club-button'>{club}</button>
                        // Mapping through tempClubList to create club buttons
                    ))}
                </div>
                <div className='create-club'>
                    {/* Create club button */}
                    <CreateButton onClick={null} />
                    {/* Placeholder onClick handler */}
                </div>
            </div>
        </div>
    );
}

export default Homepage;