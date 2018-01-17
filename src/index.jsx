import React from 'react';
import ReactDOM from 'react-dom';
import Button from './UI/Button';
import MyNav from './UI/MyNav';
import HomeSection from './UI/HomeSection';
import ValueForm from './UI/ValueForm';




const Login = (props) => (
    <div className="login">
      <p>Login page</p>
      <input id='myname' type='text' placeholder='Username'></input>
      <input type="button" value="Log in" onClick={props.toggleAuthentication}/>
    </div>
  )
  const Dashboard = (props) => (
    <div className="dashboard">
      <p>Dashboard page</p>
      Welcome:<p>{document.getElementById('myname').value}</p>
      <input type="button" value="Log out" onClick={props.toggleAuthentication}/>
    </div>
  )
  class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {isAuthenticated: false}
    }
    toggleAuthentication(){
      this.setState({isAuthenticated: !this.state.isAuthenticated})
    }
    render() {
      if(!this.state.isAuthenticated){
        return <Login toggleAuthentication={()=>this.toggleAuthentication()}/>
      } else {
      return <Dashboard toggleAuthentication={()=>this.toggleAuthentication()}/>
      }
    }
  }
 
ReactDOM.render(
    <App></App>, 
    document.getElementById("app"),
);













function handleOnClick(){
    window.alert("clicked");
}


var x="primary";
var y='true';
var email='hl896@uowmail.edu.au'
var nav_class='navbar navbar-default my_default';


ReactDOM.render(
    <MyNav classess={nav_class}></MyNav>,
    document.getElementById('root0'),

);


ReactDOM.render(
    <HomeSection></HomeSection>,
    document.getElementById('homesection'),
);
ReactDOM.render(
    


    <div></div>,
    document.getElementById('funds'),
);


ReactDOM.render(
    <ValueForm ></ValueForm>,
    document.getElementById('ValueForm'),
);












