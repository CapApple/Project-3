import React from "react";
import API from "../utilis/API";
import { BrowserRouter as Router } from "react-router-dom";

class DrugResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: false,
            deleted: false
        }
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleSaveClick = function (e) {
        this.setState({ saved: true });
        const drugData = {
            genName: this.props.gen_name,
            brandName: this.props.brand_name,
            dosage: this.props.dosage,
            frequency: this.props.frequency
        }
        e.preventDefault();
        API.addDrugToDB(drugData).then(
            (response) => {
                console.log(response);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    handleDeleteClick(e) {
        this.setState({ deleted: true });
        e.preventDefault();
        API.deleteDrug(this.props.id).then(
            (response) => {
                console.log(response);
                Router.dispatch(this.props.location, null)
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        return (
            <div className="drugResult" id={(this.props.id) ? this.props.id : null} style={{ display: this.state.deleted ? "none" : "block" }}>
                <div className="row">
                    <div className="aboutDrug">
                        <h4>{this.props.name}</h4>
                        <p>Brand Name: {(this.props.brandName) ? this.props.brandName.join(", ") : "N/A"}</p>
                    </div>
                    <div className="btnDiv">
                        {
                            // if this.props.path is "/" display save button else display Delete button
                            (this.props.path === "/") ? <button type="button" name="save" onClick={this.handleSaveClick} disabled={this.state.saved}>{(this.state.saved) ? "Saved" : "Save"}</button> : <button type="button" name="Delete" onClick={this.handleDeleteClick} disabled={this.state.deleted}>Delete</button>
                        }
                    </div>
                </div>
                <div className="row">

                    <p>{(this.props.genName) ? this.props.genName : "N/A"}</p>
                </div>
            </div>
        );
    }
}

export default DrugResult;