import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <div>
          <header>This is a test</header>
        </div>
      </React.StrictMode>
    );
  }
}

render(<App />, document.getElementById('root'));
