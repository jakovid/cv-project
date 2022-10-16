import React from "react";

function BuildExperienceInfoForm() {
    return (
        <form>
            <h1>Experience</h1>
            <input placeholder="Position"/>
            <input placeholder="Company"/>
            <input placeholder="Location"/>
            <input placeholder="Tasks"/>
            <input placeholder="From"/>
            <input placeholder="To"/>
            <button>Delete</button>
        </form>
    )
}

export default BuildExperienceInfoForm;