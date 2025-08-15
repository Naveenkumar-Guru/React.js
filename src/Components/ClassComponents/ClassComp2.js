import React from "react";

class ClassComp2 extends React.Component {
  render() {
    return (
      <>
        <h1> Child Component </h1>
        <h4>message:-{this.props.details}</h4>
        <h4>Name:-{this.props.Name}</h4>
        <h4>MobileNO:-{this.props.MobileNO}</h4>
        <h4>location:-{this.props.location}</h4>
      </>
    );
  }
}
export default ClassComp2;
