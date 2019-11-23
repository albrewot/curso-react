import React, { Component } from "react";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  handleDelete = id => {
    const { counters } = this.state;
    const filteredCounters = counters.filter(counter => counter.id !== id);
    this.setState({ counters: filteredCounters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const { counters } = this.state;
    const resetedCounters = counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: resetedCounters });
  };

  handleAddCounter = () => {
    const { counters } = this.state;
    const newArr = [...counters];
    newArr.push({ id: counters.length + 1, value: 0 });
    this.setState({ counters: newArr });
    console.log("Pressed");
  };

  render() {
    const { counters } = this.state;
    return (
      <div>
        <NavBar
          totalCounters={counters.filter(counter => counter.value > 0).length}
        />
        <Counters
          counters={counters}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onAddCounter={this.handleAddCounter}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}
