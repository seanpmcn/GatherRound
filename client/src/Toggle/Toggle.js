import "./Toggle.css"

// The Toggle code handles the dark mode toggling.
export const Toggle = ({ handleChange, isChecked}) => {
    return(
        <div className="toggle-container">
          <input
            type="checkbox"
            id="check"
            className="toggle"
            onChange={handleChange}
            checked={isChecked}/>
          <label htmlFor="check">Dark Mode</label>        
        </div>
    );
};