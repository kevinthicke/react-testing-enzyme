import * as React from "react";

export interface NumberPickerState {
  spanNumber: number;
}

export default class NumberPicker extends React.Component<{}, NumberPickerState> {
  constructor(props) {
    super(props);

    this.state = {
      spanNumber: 0
    };
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }

  increaseCount() {
    this.setState({ spanNumber: this.state.spanNumber + 1 });
  }

  decreaseCount() {
    this.setState({ spanNumber: this.state.spanNumber - 1 })
  }

  render() {
    return <div className="number-picker">
            <button className="number-picker-buttons" onClick={this.increaseCount}>+</button>
            <p className="number-picker-label">{this.state.spanNumber}</p>
            <button className="number-picker-buttons" onClick={this.decreaseCount}>-</button>
          </div>;
  }
}
