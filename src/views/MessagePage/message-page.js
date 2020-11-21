import React from 'react';
import './message-page.css';

const MessagePage = ({ errorNumnber, title }) => (
  <div className="message-container">
    {errorNumnber && (
      <div className="message" title={errorNumnber}>
        {errorNumnber}
      </div>
    )}
    <div className="message" title={title}>
      {title}
    </div>
  </div>
);

export default MessagePage;
