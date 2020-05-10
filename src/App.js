import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
        {name: 'Jeremy', age: 37},
        {name: 'Manu', age: 28},
        {name: 'Stephanie', age: 27}
    ]
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

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Jeremy69!!', age: 37 },
        {name: event.target.value, age: 28},
        {name: 'Stephanie', age: 27}
      ]
    })
  }

  render() {

    const style = {
      backgoundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
   
    return (
      <div className="App">
        <h1>Hello React</h1>
        <p> This is working </p>
        <button 
          style = {style}
          onClick = {this.switchNameHandler.bind(this, 'Super_Jeremy') }>Switch Name</button> 
        <Person 
          name = {this.state.persons[0].name} 
          age ={this.state.persons[0].age}> 
          
          My hobbies: programming 
        </Person>
        <Person 
          name = {this.state.persons[1].name} 
          age ={this.state.persons[1].age}
          click = { this.switchNameHandler.bind(this, 'Jeremy!') }
          changed = {this.nameChangedHandler}> 
          My hobbies: Racing 
          </Person>
        <Person 
          name = {this.state.persons[2].name} 
          age ={this.state.persons[2].age}> 
          My hobbies: Fapping 
        </Person>
      </div>
    );
    
   //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I\'m a react App!'));
  }
}

export default App;
