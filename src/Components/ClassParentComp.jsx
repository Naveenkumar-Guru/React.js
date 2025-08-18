import React from "react";
import ClassChild from "./ClassChild";

class ClassParentComp extends React.Component {
  Mydetails = "All";
  name = "Navin";
  mobileNo = 1234567899;
  location = "Hyderabad";
  render() {
    return (
      <div>
        <ClassChild
          details={this.Mydetails}
          Name={this.name}
          mobileNo={this.mobileNo}
          location={this.location}
        />
      </div>
    );
  }
}

export default ClassParentComp;
