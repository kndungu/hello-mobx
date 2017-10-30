import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AppState from './AppState';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App appState={new AppState()} />, div);
});
