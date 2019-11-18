import React from "react";
import { connect } from "react-redux";

import LoginForm from './login.jsx';
import { requestHelloWorld } from "../actions/helloWorld";
import { requestPersons } from "../actions/persons";

class Home extends React.Component {
  onButton1Click() {
    this.props.requestHelloWorld();
  }
  onButton2Click() {
    this.props.requestPersons();
  }

  renderArray() {
    const { persons } = this.props.persons;
    return (
      persons.map((obj, index) =>
        <card key={index}>
          <h3>Name : </h3>{obj.name}
          <h3>Height : </h3>{obj.height}
          <h3>Mass : </h3>{obj.mass}
          <h3>Hair Color : </h3>{obj.hair_color}
          <h3>Eye Color : </h3>{obj.eye_color}
          <h3>Complexion : </h3>{obj.skin_color}
        </card>
      )
    )
  }

  render() {
    const { isLoggedIn } = this.props.user;
    return (
      (isLoggedIn) ?
      <div>
        <button onClick={(e) => (this.onButton1Click())} >Request Hello World</button>
        <h1>
          {this.props.helloWorld.text}
        </h1>
        <button onClick={(e) => (this.onButton2Click())} >Request Persons</button>
        
        { (this.props.persons.persons.length !== 0 )
          ? this.renderArray()
          : null
        }
      </div> 
      : <LoginForm />
    );
  }
}

const mapStateToProps = ({ helloWorld, persons, user }) => ({ helloWorld, persons, user });

const mapDispatchToProps = { requestHelloWorld, requestPersons };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
