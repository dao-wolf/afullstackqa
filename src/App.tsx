import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import { Main } from './Main';

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Main />
      </React.StrictMode>
    );
  }
}

render(<App />, document.getElementById('root'));
