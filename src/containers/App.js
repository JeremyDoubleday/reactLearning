import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
//import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
        {id: '1', name: 'Jeremy', age: 37},
        {id: '2', name: 'Tia', age: 23},
        {id: '3', name: 'Jacob', age: 26},
        {id: '4', name: 'David', age: 45},
        {id: '5', name: 'Joe', age: 34}
    ],
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] did mount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }
/*
  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  switchNameHandler = (newName) => {
    this.setState({ 
      persons: [
        {name: newName, age: 37},
        {name: 'Manu', age: 28},
        {name: 'Stephanie', age: 27}
    ] 
  });
  }
*/
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } )
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState( { persons: persons} )
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  
  render() {

    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {
      persons = 
          <Persons persons = { this.state.persons }
          clicked = { this.deletePersonHandler }
          changed = { this.nameChangedHandler }/>;
      
    }

    return (
      <div className= {classes.App}>
        <button onClick = {() => {
          this.setState({ showCockpit: false});
        }}>Remove Cockpit</button>
        { this.state.showCockpit ? (
          <Cockpit 
            title = { this.props.appTitle }
            showPersons = { this.state.showPersons }
            personsLength = { this.state.persons.length }
            clicked = { this.togglePersonHandler }/>
        ) : null }
          { persons }
      </div>
    );
    
   //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I\'m a react App!'));
  }
}

export default App;
