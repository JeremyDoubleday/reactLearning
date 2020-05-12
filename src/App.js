import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
}
`;

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
    //console.log('Was clicked!');
    //DON'T DO THIS: this.state.persons[0] = 'SuperJeremy';
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
      persons = (
        <div >
          { this.state.persons.map((person, index) => {
            return <Person 
              changed = { (event) => this.nameChangedHandler(event, person.id) }
              key = { person.id }
              click = { () => this.deletePersonHandler(index) }
              name = {person.name}
              age = {person.age} />
          }) }
           
          </div>
      );
      
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
   
    return (
      <div className="App">
        <h1>Hello React</h1>
        <p className = { classes.join(' ') }> This is working </p>
        <button className="button"
          onClick = { this.togglePersonHandler }>Toggle Persons</button> 
          { persons }
      </div>
    );
    
   //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I\'m a react App!'));
  }
}

export default App;
