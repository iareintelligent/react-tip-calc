// THIS FILE IS USED FOR TESTING

// Node Modules
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// Components
import ReactUMD, { Button, Input } from '../index.js'

export class App extends Component {
  onClick () {
    alert('test');
  }

  render () {
    return (
      {//<main>
        // <Button onClick={this.onClick} text={"test"}/>
        // <Input placeholder={"First name"}/>
        // <Input placeholder={"Middle initial"}/>
        // <Input placeholder={"Last name"}/>
      //</main>
      }

    )
  }
}

// App entry point
ReactDOM.render( <App /> , document.getElementById( 'app' ) )
