import React from 'react';

import './app.css';

import Header from '../header/Header';
import ActivityList from '../activity-list/ActivityList';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <ActivityList />
      </div>
    </div>
  );
}

export default App;
