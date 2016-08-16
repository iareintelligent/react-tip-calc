// Node Modules
import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

// Sass
import './result.scss'



class Result extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-xs-3"><h3>{this.props.calcType}</h3></div>
          <div className="col-xs-9"><h3>{this.props.calcResult}</h3></div>
        </div>
    )
  }
}


export default Result
