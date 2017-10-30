import React from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import { AppProps } from './types';
import './App.css';

const logo = require('./logo.svg');

@observer
class App extends React.Component<AppProps, {}> {
  onReset = () => {
    this.props.appState.resetTimer();
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <button onClick={this.onReset}>
            Seconds passed: {this.props.appState.timer}
          </button>
          <DevTools />
        </div>
      </div>
    );
  }
}

export default App;
