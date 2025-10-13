import React, { Component } from 'react'

export default class MyClassComponent extends Component {

    constructor(props){
        super(props);
        this.state = { count : 0 };
        console.log("1 constructor :Initial Setup");
    }
    componetDidMount(){
        console.log("3 componentDidMount : Component added to DOM first time");
    }
    componentDidUpdate(prevProps, propState){
        console.log("4 componentDidUpdate : State/props Change");
    }
    componentWillUnmount(){
        console.log("5 componentWillUnmount : Component removed from DOM");
    }
  render() {
    console.log("2 Render : UI Render");
    return (
      <div>
        <h2>Count : {this.state.count}</h2>
        <button onClick={()=>{
            this.setState({ count: this.state.count + 1});
        }}
        >Add by 1
       </button>
      </div>
    );
  }
}
