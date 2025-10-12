import React, { Component } from 'react'

export default class MyClassComponent extends Component {

    constructor(props){
        super(props);
        console.log("1 constructor :Initial Setup");
    }
    componetDidMount(){
        console.log("componentDidMount : Component added to DOM first time");
    }
  render() {
    console.log("2 Render : UI Render");
    return (
      <div>
        
      </div>
    )
  }
}
