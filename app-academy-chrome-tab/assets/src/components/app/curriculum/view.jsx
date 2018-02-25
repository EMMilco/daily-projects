import React from 'react';
import ReactMarkdown from 'react-markdown';

export default ({ getCode, readme }) => {
  if (readme) {
    return (
      <div className="curriculum">
        <div className="markdown-body">
          <ReactMarkdown source={ readme } />
        </div>
      </div>
    );
  } else {
    return (
      <div className="curriculum sign-in">
        <span className="sign-in-link" onClick={ getCode }>Authorize Github</span><br /> 
        to view the daily curriculum.
      </div>
    );
  }
};
