import React, { Component } from 'react';
import './layout/MyStyle.css';

//File: Counter.jsx
//This file is to Create the counter 
//Getting props from Cart component
 class Counter extends Component {
  
  render() {
    return (
      <div className="buttons">
          <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-primary m-2">-</button>
          <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-warning m-2">+</button>
          <button onClick={() => this.props.onDelete(this.props.counter)} className="btn btn-danger m-2">Delete</button>
      </div>
    )
  }
}

export default Counter
