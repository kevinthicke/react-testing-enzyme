import * as React from "react";

const numberPickerStyle: React.CSSProperties = {
  width: '150px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  border: '1px solid #EDEEF4',
  boxShadow: '0 2px 1px 0 rgba(0, 0, 0, 0.03)',
  color: '#385871',
  borderRadius: '5px'
}

const numberPickerLabel: React.CSSProperties = {
  width: '100px',
  height: '32px',
  textAlign: 'center',
  padding: '0',
  outline: 'none',
  fontFamily: 'OpenSans-Bold, sans-serif',
  color: '#385871',
  borderRadius: '5px',
  lineHeight: '30px'
}

const numberPickerButtons: React.CSSProperties = {
  backgroundColor: 'navy',
  border: 'none',
  color: 'white',
  width: '30px',
  outline: 'none',
  height: '30px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  borderRadius: '50%',
  fontSize: '25px',
  paddingBottom: '5px',
  lineHeight: '25px',
  cursor: 'pointer'
}


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
    return <div style={numberPickerStyle}>
            <button style={numberPickerButtons} onClick={this.increaseCount}>+</button>
            <span style={numberPickerLabel}>{this.state.spanNumber}</span>
            <button style={numberPickerButtons} onClick={this.decreaseCount}>-</button>
          </div>;
  }
}
