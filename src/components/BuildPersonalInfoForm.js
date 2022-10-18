import React from "react";

function BuildPersonalInfoForm() {
    return (
        <form>
            <h1>Personal Information</h1>
            <input placeholder="First Name"/>
            <input placeholder="Last Name"/>
            <input placeholder="Phone Number"/>
            <input placeholder="Email"/>
            <textarea placeholder="About Me" rows='3'/>
        </form>
    )
}

export default BuildPersonalInfoForm;