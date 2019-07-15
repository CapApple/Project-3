import React from "react";
import DrugResults from "../components/DrugResults";

function ResultsContainer(props) {
    if(props.path === "/") {
        return(
            <div id="resultsContainer">
                <h3>Results Found</h3>
                {/* {props.drugData.map((drug) => {
                    const drugInfo = drug.volumeInfo;
                    return <DrugResults
                    genName={drugInfo.generic_name}
                    brandName={drugInfo.authors}
                    dosage={drugInfo.description}
                    key={drug.id}/> */}
                })}
            </div>
        );
    } else if(props.path === "/saved") {
        if(props.savedDrugs.length > 0) {
            return(
                <div id="resultsContainer">
                    <h3>Saved Drugs</h3>
                    {/* {props.savedDrugs.map((drug) => {
                        return <DrugResults
                        genName={drugInfo.name}
                        brandName={drugInfo.authors}
                        dosage={drugInfo.description}
                        key={drug.id}/>
                    })} */}
                </div>
            );
        } else {
            return(
                 <div id="resultsContainer">
                    <h3>Saved drugs</h3>
                    <p>No saved drugs.</p>
                </div>
            );
        }
    }
}

export default ResultsContainer;