import React, {component, Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    //automatically called by React when error is thrown
    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMessage: error });
    }

    render() {
        if (this.state.hasError) {
            return <h1>{ this.state.errorMessage } </h1>;
        } else {
            return this.props.children;
        }
        
    }
}

export default ErrorBoundary;