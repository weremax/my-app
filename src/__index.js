import React, { Component } from 'react';
import ReactWebComponent from 'react-web-component';
import App2 from './App2';

class App extends Component {
    render () {
        return (
            <div>
                <App2 />
            </div>
        )
    }
}


ReactWebComponent.create(
    <App />
, 'my-component');