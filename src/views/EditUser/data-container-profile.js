import React from 'react';
import './edit-user.css';

const DataContainerProfile = ({ view, title, ...rest }) => {
  return (
    <div className="container-settings" {...rest}>
      <div className="container-title">
        <h1>
          { title }
        </h1>
      </div>
      { view() }
    </div>
  );
}

export default DataContainerProfile;