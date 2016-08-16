// THIS FILE IS USED FOR TESTING

// Node Modules
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// Components
import ReactUMD, { Button, Input, Result } from '../index.js'

// export class App extends Component {
//   onClick () {
//     alert('test');
//   }
//
//   render () {
//     return (
//       <main>
//         React App
//         <Button onClick={this.onClick} text={"testb"}/>
//         <Input placeholder={"First name"}/>
//         <Input placeholder={"Middle initial"}/>
//         <Input placeholder={"Middle initial"}/>
//       </main>
//     )
//   }
// }

export class UserVars extends Component {

  render() {
    return (
      <div>
        <Input inputLabel={"Bill"}/>
        <Input inputLabel={"Tip"}/>
        <Input inputLabel={"Num of People"}/>
      </div>
    )
  }
}

export class CalcOutput extends Component {
  render() {
    return (
      <div className="container">
        <Result calcType={"Tip:"} calcResult={"$munny"}/>
        <Result calcType={"Total:"} calcResult={"$total"}/>
      </div>
    )
  }
}

// App entry point
//ReactDOM.render( <App /> , document.getElementById( 'app' ) )
ReactDOM.render( <UserVars />, document.getElementById( 'userVars' ) )
ReactDOM.render( <CalcOutput />, document.getElementById( 'calcOutput' ) )
