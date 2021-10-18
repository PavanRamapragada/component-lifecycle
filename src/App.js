import React from 'react';
//import './App.css';

class Container extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: true,
      count: 0
    };
  }

  delHeader=()=>{
    this.setState({show: !this.state.show});
  }

  /*componentWillMount(){
    console.log('componentWillMount Method called');
    console.log('----------------------------------');
  }*/

  componentDidMount() {
    console.log('componentDidMount Method called');
    console.log('-------------------------------');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate Method called');
    console.log('--------------------------------');
  }

  render() {
    let myHeader;
    if(this.state.show){
      myHeader = <Child/>;
    };
    return(
      <div>
        <center>
          {myHeader}
          <button type="button" onClick={this.delHeader}>Toggle Header</button><hr /><hr />
          <h3>count: {this.state.count}</h3>
          <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
          <button onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>
        </center>
      </div>
    );
  }
}

class Child extends React.Component{
  componentWillUnmount(){
    console.log('child componentWillUnmount Method called');
    console.log('----------------------------------------');
  }

  componentDidMount(){
    console.log('child componentDidMount Method called');
    console.log('-------------------------------------');
  }

  render(){
    return(
      <h1>Hello World!</h1>
    );
  }
}

export default Container;
