import React from 'react'

export const Content = ({ text }) => {
  return (
    <p dangerouslySetInnerHTML={{ __html: text }}>
    </p>
  );
}