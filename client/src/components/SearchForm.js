import React from "react";
import Search from "../pages/Search";

function SearchForm(props) {
    return(
        <div id="searchContainer">
            <h3>Drug Search</h3>
            <form id="drugSearch">
                <label htmlFor="drugInput" form="drugSearch">Enter a drug to search:</label>
                <br></br>
                <input type="text" name="drugInput" id="drugInput" form="drugSearch" placeholder="Drug Name" required/>
                <br></br>
                <button type="submit" onClick={(event) => this.handleSearchClick(event)}>Search</button>
            </form>
        </div>
    );
}

export default SearchForm;