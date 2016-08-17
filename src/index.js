// THIS FILE IS USED FOR TESTING

// Node Modules
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// Components
import ReactUMD, { Button, Input, Result } from '../index.js'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tip: 0,
      total: 0
    };
  }
  render() {
    var { billValue, tipPct, splitValue } = this.props;
    var { tip, total } = this.state;
    return (
      <section>
        <div>
          <Input id="bill" value={billValue} inputLabel={"Bill"} onChange={this.updateTotal.bind(this)} />
          <Input id="percent-tip" value={tipPct} inputLabel={"Tip"} onChange={this.updateTotal.bind(this)} />
          <Input id="split-num" value={splitValue} inputLabel={"Number of People"} onChange={this.updateTotal.bind(this)} />
        </div>
        <div>
          <Result calcType={"Tip:"} calcResult={tip}></Result>
          <Result calcType={"Total:"} calcResult={total}></Result>
        </div>
      </section>
    );
  }
  updateTotal(){
    debugger;
    this.setState({tip: this.props.billValue *  this.props.tipPct/100});
    this.setState({total: this.props.billValue + this.props.tip});
  }
}
//props
//state

// App entry point
ReactDOM.render( <App billValue={0} tipPct={18} splitValue={0} /> ,
   document.getElementById('app') )
