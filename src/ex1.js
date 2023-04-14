import React, { Component } from 'react';

export default class ex1 extends Component {

state={
    name:"chinni"
}
componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/todos').then(
res => res.json()
).then(data => console.log(data))
}


  render() {
    return (
      <div>
        <h1>T
            his is class leveal component</h1>
      </div>
    );
  }
}
