import { render } from "@testing-library/react";
import './App.css';
import React, { Component, component } from "react";
import BuildPersonalInfoForm from "./components/BuildPersonalInfoForm";
import BuildExperienceInfoForm from "./components/BuildExperienceInfoForm";
import BuildEducationInfoForm from "./components/BuildEducationInfoForm";

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      general: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        aboutMe: '',
      },
      education: {
        school: '',
        major: '',
        graduation: '',
      },
      experience: {
        company: '',
        position: '',
        tasks: '',
        employment: '',
      }

    }
  }

  render() {

    return(
      <div id="container">
        <div id='cvHeader'>
          head
        </div>
        <div id="cvBody">
          <BuildPersonalInfoForm/>
          <BuildExperienceInfoForm/>
          <BuildEducationInfoForm/>
        </div>
        <div id='cvFooter'>
          foot
        </div>
      </div>
    )
  }
}

export default App;
