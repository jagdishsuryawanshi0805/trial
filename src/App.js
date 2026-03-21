import React from 'react';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <div className="hero-section">
        <h1 className="title">VulcanPaaS</h1>
        <p className="subtitle">
          The future of auto-deploy platforms. Engineered for speed, built for developers.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Instant Deploy</h3>
            <p>Push code and watch it go live in seconds without any manual intervention.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Native</h3>
            <p>Every commit is reviewed by Deepseek V3 before it hits production.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🐳</div>
            <h3>Docker Underhood</h3>
            <p>Zero configuration required. Vulcan auto-generates containers for any framework.</p>
          </div>
        </div>
        <button className="cta-button" onClick={() => alert('Welcome to the future!')}>
          Get Started
        </button>
      </div>
      <div className="background-decoration"></div>
    </div>
  );
}

export default App;