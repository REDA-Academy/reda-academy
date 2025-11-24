import React from 'react';

function LoadingScreen() {
  return (
    <div className="loading-container">
      <div className="book-wrapper">
        <div className="book">
          {/* Left page */}
          <div className="page page-left">
            <div className="page-content">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          
          {/* Right page with flip animation */}
          <div className="page page-right">
            <div className="page-front">
              <div className="page-content">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
            {/* Back of the page */}
            <div className="page-back">
              <div className="page-content">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
}

export default LoadingScreen;