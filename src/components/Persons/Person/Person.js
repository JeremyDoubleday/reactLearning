import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux.js';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    };

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    };

    render() {
        console.log('[Person.js] rendering...');
        return (
            //<div className = "Person" style = { style }>
            <Aux>
                { this.context.authenticated ? <p>Authenticated!</p> : <p>Please login.</p> }

                <p onClick = { this.props.click }>I'm { this.props.name } and I am { this.props.age } years old!.</p>
                <p>{ this.props.children}</p>
                <input type = "text" 
                onChange = { this.props.changed }
                //ref = {(inputEl) => { this.inputElement = inputEl }}
                ref = { this.inputElementRef }
                value = { this.props.name }/>
            </Aux>
        );
    }    
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);