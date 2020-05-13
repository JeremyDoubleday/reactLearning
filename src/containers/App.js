import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
        {id: '1', name: 'Jeremy', age: 37},
        {id: '2', name: 'Manu', age: 28},
        {id: '3', name: 'Stephanie', age: 27}
    ],
    showPersons: false
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

    let persons = null;

    if (this.state.showPersons) {
      persons = 
          <Persons persons = { this.state.persons }
          clicked = { this.deletePersonHandler }
          changed = { this.nameChangedHandler }/>;
      
    }

    return (
      <div className= {classes.App}>
          <Cockpit 
            title = { this.props.appTitle }
            showPersons = { this.state.showPersons }
            persons = { this.state.persons }
            clicked = { this.togglePersonHandler }/>
          { persons }
      </div>
    );
    
   //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I\'m a react App!'));
  }
}

export default App;
