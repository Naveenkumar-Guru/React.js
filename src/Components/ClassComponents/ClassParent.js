import React, { Component } from "react";
import ClassComp2 from "./ClassComp2";

class ClassComp1 extends Component {
  MyDetails = "Hello";
  name = "Navin";
  Mobile = 1234567890;
  location = "Hyderabad";
  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        {/* <h4> component </h4> */}
        <ClassComp2
          details={this.MyDetails}
          Name={this.name}
          MobileNO={this.Mobile}
          location={this.location}
        />
      </div>
    );
  }
}

export default ClassComp1;
