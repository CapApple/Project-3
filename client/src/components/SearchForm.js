import React from "react";

function SearchForm(props) {
    return(
        <div id="searchContainer">
            <h3>Drug Search</h3>
            <form id="drugSearch">
                <label htmlFor="drugInput" form="drugSearch">Enter a drug to search:</label>
                <br></br>
                <input type="text" name="drugInput" id="drugInput" form="drugSearch" onChange={(e) => props.handleChange(e)} placeholder="Drug Title" required/>
                <br></br>
                <button type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
            </form>
        </div>
    );
}

export default SearchForm;