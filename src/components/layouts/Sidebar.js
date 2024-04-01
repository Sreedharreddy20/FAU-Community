import React from 'react';

const Sidebar = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return null; 
  }

  return (
    <div className="sidebar">
      <h3>Sidebar Content</h3>
      <ul className="list-group">
        <li className="list-group-item">Communities</li>
        <li className="list-group-item">Find Resources</li>
      </ul>
    </div>
  );
};

export default Sidebar;
