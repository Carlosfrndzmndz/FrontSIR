import React from 'react';
import './LoadingSkeleton.css';

const LoadingSkeleton = () => {
  return (
    <div className="loading-skeleton-container">
      <div className="loading-skeleton">
        <div className="loading-header"></div>
        <div className="loading-button"></div>
        <div className="loading-row"></div>
        <div className="loading-row"></div>
        <div className="loading-row"></div>
      </div>
      <div className="loading-skeleton">
        <div className="loading-header"></div>
        <div className="loading-button"></div>
        <div className="loading-row"></div>
        <div className="loading-row"></div>
        <div className="loading-row"></div>
      </div>
      <div className="loading-skeleton">
        <div className="loading-header"></div>
        <div className="loading-button"></div>
        <div className="loading-row"></div>
        <div className="loading-row"></div>
        <div className="loading-row"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;