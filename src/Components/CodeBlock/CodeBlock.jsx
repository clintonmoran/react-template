import React from 'react';

export const Codeblock = ({ text }) => {
  // TODO:  style the component to look like code
  return (
    <div className="code-block">
      <p>
        {text}
      </p>
    </div>
  )
}