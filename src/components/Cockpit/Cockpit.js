import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = ( props ) => {

    const authContext = useContext(AuthContext);
    const toggleBtnRef = useRef(null);



    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Http requests...
        //const timer = setTimeout(() => {
        //    console.log('Saved data to cloud!');            
        //}, 1000);

        toggleBtnRef.current.click();

        return () => {
            console.log('[Cockpit.js cleanup return');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup return in 2nd useEffect');
        };
    });

    // useEffect() can use multiple

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className = { classes.Cockpit }>
            <h1> { props.title } </h1>
            <p className = { assignedClasses.join(' ') }> This is working </p>
            <button 
                ref = { toggleBtnRef }
                className={ btnClass }
                onClick = { props.clicked }>Toggle Persons
            </button> 


    { <button onClick = { authContext.login }>Log In </button> }

        </div>
    );
};

export default React.memo(cockpit);