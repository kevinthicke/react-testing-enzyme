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
    return <div> 
            <button onClick={this.increaseCount}>+</button>
            <span>{this.state.spanNumber}</span>
            <button onClick={this.decreaseCount}>-</button>
          </div>;
  }
}
