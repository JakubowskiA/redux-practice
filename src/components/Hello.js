import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Hello extends Component {
  render() {
    console.log("props", this.props);
    return (
      < div className="hello-div">
        <button onClick={this.props.changeH}>h</button>
        <button onClick={this.props.changeE}>e</button>
        <button onClick={this.props.changeL1}>l</button>
        <button onClick={this.props.changeL2}>l</button>
        <button onClick={this.props.changeO}>o</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    h: state.h,
    e: state.e,
    l1: state.l1,
    l2: state.l2,
    o: state.o,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeH: () => dispatch({ type: "CHANGE_H" }),
    changeE: () => dispatch({ type: "CHANGE_E" }),
    changeL1: () => dispatch({ type: "CHANGE_L1" }),
    changeL2: () => dispatch({ type: "CHANGE_L2" }),
    changeO: () => dispatch({ type: "CHANGE_O" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
