// We can set any name to this file
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    };

    componentDidCatch = (error, info) => {
        console.log(error, info);
        this.state.setState({
            hasError: true,
            errorMessage: error
        })
    };

    render() {
        if (this.state.hasError) {
            return <h1>{ this.state.errorMessage }</h1>
        }

        // Will return all components that wrapped with ErrorBoundary
        return this.props.children;
    }
}

export default ErrorBoundary;