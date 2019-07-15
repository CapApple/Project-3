import React from "react";
import SearchForm from "../components/SearchForm";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utilis/API";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drugInput: "",
            drugData: []
        }
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({drugInput: event.target.value})
    }

    handleSearchClick(event) {
        event.preventDefault();
        API.searchdrugs(this.state.drugInput)
            .then(
                (response) => {
                    this.setState({drugData: response.data});
                    this.setState({drugInput: ""});
                }
            );
    }

    render() {
        return(
            <main>
                <SearchForm handleChange={this.handleChange} handleSearchClick={this.handleSearchClick} />
                {(this.state.drugData.length > 0)?
                    <ResultsContainer drugData={this.state.drugData} path={this.props.match.path}/> : null
                }
            </main>
        );
    }
}

export default Search;