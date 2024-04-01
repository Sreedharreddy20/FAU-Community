import React from 'react';
import Sidebar from './Sidebar'
import CardComponent from '../CardComponent';

const HomePage = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-6">
          <CardComponent />
        </div>
        <div className="col-md-3">Column 3</div>
      </div>
    </div>
  );
};

export default HomePage;
