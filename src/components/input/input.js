// Node Modules
import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

// Sass
import './input.scss'



class Input extends Component {
  render() {
    return (
      <div>
        <label>
          {this.props.inputLabel}
        </label>
        <div>
          <input type="number"/>
        </div>
      </div>
    )
  }
}


export default Input
