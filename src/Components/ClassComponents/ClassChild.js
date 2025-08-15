import React from "react";

class ClassChild extends React.Component {
  render() {
    return (
      <>
        <h1> Child Component </h1>
        <h4>details:-{this.props.details}</h4>
        <h4>Name:-{this.props.Name}</h4>
        <h4>MobileNO:-{this.props.mobileNo}</h4>
        <h4>location:-{this.props.location}</h4>
      </>
    );
  }
}
export default ClassChild;
