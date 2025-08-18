import React from "react";
import PropsB from "./PropsB";

class PropsA extends React.Component {
  Student = "Data";
  s_Id = 10;
  s_Name = "Naveen";
  s_Age = "20";
  s_Details = { DOB: "01/01/2000", Department: "MCA" };
  s_Loc = ["Hyd", "Bng", "TN"];
  render() {
    return (
      <div>
        <PropsB
          s_Id={this.s_Id}
          s_Name={this.s_Name}
          s_Age={this.s_Age}
          s_Details={this.s_Details}
          s_Loc={this.s_Loc}
        />
      </div>
    );
  }
}

export default PropsA;
