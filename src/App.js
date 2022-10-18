import { render } from "@testing-library/react";
import './App.css';
import React, { Component, component } from "react";
import BuildPersonalInfoForm from "./components/BuildPersonalInfoForm";
import BuildExperienceInfoForm from "./components/BuildExperienceInfoForm";
import BuildEducationInfoForm from "./components/BuildEducationInfoForm";

function App() {
  function addExperience() {
    BuildExperienceInfoForm();
    console.log('click');
  }
  return(
    <div>
      <div id='cvBody'>
        <div id='personalInfo'>
          <BuildPersonalInfoForm/>
        </div>
        <div id='experienceInfo'>
          <BuildExperienceInfoForm/>
          <button onClick={addExperience}>Click Me!</button>
        </div>
        <div id='educationInfo'>
          <BuildEducationInfoForm/>
        </div>
      </div>
    </div>
  )
}
export default App;
