import React, { Component } from 'react'

export default class Ccomponent extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }

      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)
      this.reset = this.reset.bind(this)
    }

    increment() {
        this.setState({count: this.state.count + 1})
    }

    decrement() {
        this.setState({count: this.state.count -1 })
    }

    reset() {
        this.setState({count: this.state.count = 0})
    }

  render() {
    return (
      <div>Ccomponesadsadsant
        <h1>{this.state.count}</h1>
        <button onClick={this.increment} >+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>reset</button>
      </div>

    )
  }
}

