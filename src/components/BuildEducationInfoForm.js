import React from "react";

function BuildEducationInfoForm() {
    return (
        <form id='educationForm'>
            <h1>Education</h1>
            <input placeholder="Univeristy"/>
            <input placeholder="Location"/>
            <input placeholder="Degree Type"/>
            <input placeholder="Major"/>
            <input placeholder="From"/>
            <input placeholder="To"/>
            <button>Delete</button>
        </form>
    )
}

export default BuildEducationInfoForm;