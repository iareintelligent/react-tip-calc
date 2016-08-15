// Node Modules
import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

// Sass
import './input.scss'



class Input extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder={this.props.placeholder}/>
      </div>
    )
  }
}


export default Input
