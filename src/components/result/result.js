// Node Modules
import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

// Sass
import './result.scss'



class Result extends Component {
  render() {
    return (
        <div>
          <h3>{this.props.calcType}</h3>
          <h3>{this.props.calcResult}</h3>
        </div>
    )
  }
}


export default Result
