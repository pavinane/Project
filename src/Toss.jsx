import React from "react";
import Ta from "./Ta";

// import Option from "./Option";

// const option = () => <div>pavi</div>;
class Toss extends React.Component {
  state = {
    text: "",
    flip: ""
  };
  choosePhoto = () =>
    this.setState({
      text: true,
      flip: true
    });

  render() {
    const { text, flip } = this.state;

    return (
      <div className="toss">
        <h1>toss the coin</h1>

        {text && <p>{<Ta />}</p>}
        <div className="click">
          <button type="button" onClick={this.choosePhoto}>
            {flip ? "flip" : "click"}
          </button>
        </div>
      </div>
    );
  }
}

export default Toss;
