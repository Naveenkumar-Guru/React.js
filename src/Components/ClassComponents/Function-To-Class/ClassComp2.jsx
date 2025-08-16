import React from "react";

export class ClassComp2 extends React.Component {
  render(
    { Mobiledetails, model, brand, price, storage, camera, battery } = this
      .props
  ) {
    return (
      <div>
        <h1>Class Component2</h1>
        <h4>Mobiledetails:-{Mobiledetails}</h4>
        <h4>model:-{model}</h4>
        <h4>brand:-{brand}</h4>
        <h4>price:-{price}</h4>
        <h4>storage:-{storage}</h4>
        <h4>camera:-{camera}</h4>
        <h4>battery:-{battery}</h4>
      </div>
    );
  }
}

export default ClassComp2;
