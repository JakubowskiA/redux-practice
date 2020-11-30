import React, { Component } from "react";
import { connect } from "react-redux";

class Hello extends Component {
  render() {
    console.log("props", this.props);
    const colorMap = {
      0: "red",
      1: 'orange',
      2: 'yellow',
      3: 'green',
      4: 'blue',
      5: 'purple'
    }

    console.log('a', colorMap[this.props.h])
    return (
      < div className="hello-div">
        <div onClick={this.props.changeH} className={colorMap[this.props.h]}>h</div>
        <div onClick={this.props.changeE} className={colorMap[this.props.e]}>e</div>
        <div onClick={this.props.changeL1} className={colorMap[this.props.l1]}>l</div>
        <div onClick={this.props.changeL2} className={colorMap[this.props.l2]}>l</div>
        <div onClick={this.props.changeO} className={colorMap[this.props.o]}>o</div>
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
