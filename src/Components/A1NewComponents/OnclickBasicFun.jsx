import React from "react";

class OnclickBasicFun extends React.Component {
  message = "Welcome";

  handleClick = () => {
    this.message = "Thank you";
    console.log(this.message);
    this.forceUpdate();
  };
  handleSeeYouClick = () => {
    this.message = "See You Soon";
    console.log(this.message);
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <h1>Basice function by using onClick in class Component</h1>
        <p>Message:-{this.message}</p>
        <button onClick={this.handleClick}>Thank You</button>
        <br></br>
        <br></br>
        <button onClick={this.handleSeeYouClick}>Say See You Soon</button>
      </div>
    );
  }
}

export default OnclickBasicFun;
