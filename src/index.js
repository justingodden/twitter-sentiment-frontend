import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TweetProvider } from './context/TweetContext';

ReactDOM.render(
  <React.StrictMode>
    <TweetProvider>
      <App />
    </TweetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
