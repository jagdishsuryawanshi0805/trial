import React from 'react';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Hello World!</h1>
        <p className="subtitle">
          Welcome to my trial website. This is a simple React application 
          deployed automatically to test out the continuous delivery pipeline.
        </p>
        <div className="status-badge">
          <span className="dot pulse"></span>
          System Online
        </div>
      </div>
      <div className="background-decoration"></div>
    </div>
  );
}

export default App;