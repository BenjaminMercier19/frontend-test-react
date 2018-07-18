import React from 'react';

import './app.css';
import Header from '../header/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        Here display list of activities
      </div>
    </div>
  );
}

export default App;
