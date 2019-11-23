import React, { Component } from "react";
import Counter from "./Counter";

export default class Counters extends Component {
  s;

  render() {
    const {
      counters,
      onDelete,
      onAddCounter,
      onIncrement,
      onReset
    } = this.props;
    return (
      <div className="p-3">
        <button className="btn btn-secondary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        <button className="btn btn-success btn-sm" onClick={onAddCounter}>
          Add Counter
        </button>

        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            // value={counter.value}
            // id={counter.id}
          />
        ))}
      </div>
    );
  }
}
