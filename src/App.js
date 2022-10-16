import { render } from "@testing-library/react";
import React, { Component, component } from "react";

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      general: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
      education: {
        school: '',
        major: '',
        graduation: '',
      },
      experience: {

      }

    }
  }

  render() {

    return(
      <div>Hello</div>
    )
  }
}

export default App;
