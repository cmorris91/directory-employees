import react from "react";
import "./style.css";

function Search(props) {
    return (
        <div className="search-bar">
            <form className="form">
            <input 
            placeholder="Search by Name"
            value={props.value}
            name="search"
            type="text"
            onChange={props.handleInputChange}
            />
            <button 
            type="submit"
            onClick={props.handleFormSubmit}
            >search</button>
            </form>
        </div>
    )
}

export default Search;