import React from "react";
import FunctionCompB from "./FunctionCompB";

class ClassCompA extends React.Component {
  carBrand = "BMW";
  carModel = "X7";
  carYear = 2025;
  carColor = "Black";
  render() {
    return (
      <div>
        <h1>Class Component A</h1>
        <FunctionCompB
          carBrand={this.carBrand}
          carModel={this.carModel}
          carYear={this.carYear}
          carColor={this.carColor}
        />
      </div>
    );
  }
}
export default ClassCompA;
