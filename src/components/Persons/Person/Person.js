import React from 'react';
import classes from './Person.css';

const person = (props) => {

    const rand = Math.random();
    
    /*
    if (rand > .8) {
        throw new Error('Something broke');
    }
    */
    
    return (
    //<div className = "Person" style = { style }>
    <div className = { classes.Person }>
        <p onClick = {props.click}>I'm {props.name} and I am { props.age } years old!.</p>
        <p>{ props.children}</p>
        <input type = "text" onChange = {props.changed}
        value = {props.name}/>
    </div>
    )
};

const randomAge = () => {
    return Math.floor(Math.random() * 100);
}

export default person;