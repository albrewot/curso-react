import React, { Component } from "react";

export default class Counter extends Component {
  formatValue = () => {
    const { counter } = this.props;
    return counter.value === 0 ? "Zero" : counter.value;
  };

  changeBadgeClass = () => {
    const { counter } = this.props;
    let classes = "badge p-2 m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  render() {
    const { onDelete, onIncrement, counter } = this.props;
    return (
      <div>
        <span className={this.changeBadgeClass()}>{this.formatValue()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          x
        </button>
      </div>
    );
  }
}
